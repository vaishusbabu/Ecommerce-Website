const Cart = require('./CartSchema')

const cartlist = async (req, res) => {

    let date = new Date();
    let flag = 0;
    await Cart
        .find({ custid: req.params.id, pdtid: req.body.pdtid })
        .exec()
        .then((data) => {
            if (data.length > 0) {
                flag = 1;
            }
        });
    if (flag == 0) {
        newcart = new Cart({
            custid: req.params.id,
            pdtid: req.body.pdtid,
            date: date
        });
        await newcart

        newcart.save()
            .then(data => {
                console.log("Added to Cart")
                res.json({
                    status: 200,
                    msg: "saved to cart",
                    data: data
                })
            })
            .catch(error => {
                console.log("Error Occured", error)
                res.json({
                    status: 500,
                    msg: "Error",
                    data: error
                })
            })
    }
    else {
        res.json({
            status: 500,
            msg: "Already in saved list"
        })
    }
}

const viewcart = (req, res) => {
    Cart.find({ custid: req.params.id })
        .populate("pdtid")
        .exec()
        .then(data => {
            console.log("Viewed");
            res.json({
                status: 200,
                msg: "saved to cart",
                data: data
            });
        })
        .catch(error => {
            console.log("Error Occurred", error);
            res.json({
                status: 500,
                msg: "Error",
                data: error
            });
        });
};

const removeFromCart = async (req, res) => {
    try {
        const { custid, pdtid } = req.params;


        const result = await Cart.deleteOne({ custid: custid, pdtid: pdtid });

        if (result.deletedCount > 0) {
            res.json({
                status: 200,
                msg: "Item removed from cart"
            });
        } else {
            res.json({
                status: 404,
                msg: "Item not found in cart"
            });
        }
    } catch (error) {
        console.error("Error removing item from cart", error);
        res.json({
            status: 500,
            msg: "Error",
            data: error
        });
    }
};

module.exports = { cartlist, viewcart, removeFromCart }