const Product = require('./PdtSchema')

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage }).single('img')

const addpdt = (req, res) => {
    console.log(req.body);
    let newpdt = new Product({
        pdtname: req.body.pdtname,
        quantity: req.body.quantity,
        price: req.body.price,
        img: req.file
    })
    newpdt.save()
        .then(data => {
            console.log("Saved Successfully")
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
                msg: "Error Occured",
                data: error
            })
        })
}
module.exports = { addpdt }