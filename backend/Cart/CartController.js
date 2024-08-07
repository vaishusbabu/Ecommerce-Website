const Cart = require('./CartSchema');

const cartlist = async (req, res) => {
    try {
        const { id: custid } = req.params;
        const { pdtid } = req.body;

        const existingItem = await Cart.findOne({ custid, pdtid });

        if (existingItem) {
            return res.json({
                status: 400,
                msg: "Item already in cart"
            });
        }

        const newcart = new Cart({
            custid,
            pdtid,
            date: new Date()
        });

        const savedCart = await newcart.save();

        res.json({
            status: 200,
            msg: "Added to cart",
            data: savedCart
        });
    } catch (error) {
        console.error("Error adding to cart", error);
        res.status(500).json({
            status: 500,
            msg: "Error adding to cart",
            data: error.message
        });
    }
};

const viewcart = async (req, res) => {
    try {
        const { id: custid } = req.params;
        const cartItems = await Cart.find({ custid }).populate("pdtid");

        res.json({
            status: 200,
            msg: "Cart retrieved successfully",
            data: cartItems
        });
    } catch (error) {
        console.error("Error retrieving cart", error);
        res.status(500).json({
            status: 500,
            msg: "Error retrieving cart",
            data: error.message
        });
    }
};

const removeFromCart = async (req, res) => {
    try {
        const { custid, pdtid } = req.params;
        const result = await Cart.deleteOne({ custid, pdtid });

        if (result.deletedCount > 0) {
            res.json({
                status: 200,
                msg: "Item removed from cart"
            });
        } else {
            res.status(404).json({
                status: 404,
                msg: "Item not found in cart"
            });
        }
    } catch (error) {
        console.error("Error removing item from cart", error);
        res.status(500).json({
            status: 500,
            msg: "Error removing item from cart",
            data: error.message
        });
    }
};

module.exports = { cartlist, viewcart, removeFromCart };