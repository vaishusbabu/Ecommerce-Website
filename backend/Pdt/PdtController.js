const { Console } = require('console');
const Product = require('./PdtSchema');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../upload'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage }).array('img', 10);

const addpdt = (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            return res.status(500).json({ status: 500, msg: "Error Occurred", data: err });
        }

        const { pdtname, quantity, price } = req.body;
        const imgs = req.files ? req.files.map(file => file.path) : [];

        let newpdt = new Product({
            pdtname: pdtname,
            quantity: quantity,
            price: price,
            img: imgs
        });

        newpdt.save()
            .then(data => {
                console.log("Saved Successfully");
                res.json({
                    status: 200,
                    msg: "Saved Successfully",
                    data: data
                });
            })
            .catch(error => {
                console.log("Error Occurred");
                res.json({
                    status: 500,
                    msg: "Error Occurred",
                    data: error
                });
            });
    });
};
const allpdt = (req, res) => {
    Product.find({

    })
        // .sort({ date: -1 })
        .exec()
        .then(data => {

            console.log("data of all pdts", data)
            res.json({
                status: 200,
                msg: 'Data Fetched Succesfully',
                data: data
            })

        })
        .catch(err => {
            console.log(err);
            res.json({
                status: 500,
                msg: "No Data"
            })
        })
};
const dltpdt = (req, res) => {

    Product.findByIdAndDelete({
        _id: req.params.id
    })
        .exec()
        .then(data => {

            console.log(data, "data")
            res.json({
                status: 200,
                msg: 'Deleted Succesfully..',
                data: data
            })

        })
        .catch(err => {
            console.log(err);
            res.json({
                status: 500,
                msg: "Error Occured"
            })
        })
}
const editpdt = (req, res) => {
    Product.findByIdAndUpdate({
        _id: req.params.id
    },
        {
            pdtname: req.body.pdtname,
            quantity: req.body.quantity,
            price: req.body.price,
            img: req.file
        })
        .exec()
        .then(data => {

            console.log(data)
            res.json({
                status: 200,
                msg: ' Product Updated Succesfully',
                data: data
            })

        })
        .catch(err => {
            console.log(err);
            res.json({
                status: 500,
                msg: "No Update"
            })
        })
}
const idfetch = (req, res) => {

    Product.findById({
        _id: req.params.id
    })
        .exec()
        .then(data => {
            console.log("Data Fetched Succesfully")
            res.json({
                status: 200,
                msg: "Saved Succesfully",
                data: data
            })
        })
        .catch(error => {
            console.log("Error Occured")
            res.json({
                status: 500,
                msg: "Error",
                data: error
            })
        })


}
module.exports = { addpdt, allpdt, dltpdt, editpdt, idfetch };
