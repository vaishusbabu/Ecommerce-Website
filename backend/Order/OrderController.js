const Order = require('./OrderSchema');
const Product = require('../Pdt/PdtSchema');


const orderlist = async (req, res) => {
    const { id: custid } = req.params;
    const { pdtid, deliverydate, paymenttype, paymentstatus, shippingaddress, quantity, totalamount } = req.body;

    try {
        const product = await Product.findById(pdtid);
        if (!product) {
            return res.status(400).json({ status: 400, msg: "Product not found" });
        }
        if (quantity > product.quantity) {
            return res.status(400).json({ status: 400, msg: "Insufficient stock" });
        }

        const newOrder = new Order({
            custid,
            pdtid,
            date: new Date(),
            deliverydate,
            paymenttype,
            paymentstatus,
            shippingaddress,
            quantity,
            totalamount,
        });

        await newOrder.save();
        product.quantity -= quantity;
        await product.save();

        res.status(200).json({
            status: 200,
            msg: "Order placed successfully",
            data: newOrder,
        });
    } catch (error) {
        console.error("Error placing order", error);
        res.status(500).json({
            status: 500,
            msg: "Error placing order",
            error,
        });
    }
};

const ordpdt = async (req, res) => {
    try {
        const orders = await Order.find({ custid: req.params.id }).populate('pdtid').exec();
        const data1 = [], data2 = [];

        orders.forEach(order => {
            const isLate = (order.deliverydate.getMonth() < order.date.getMonth()) ||
                (order.deliverydate.getMonth() === order.date.getMonth() && order.deliverydate.getDate() < order.date.getDate() - 2);
            (isLate ? data1 : data2).push(order);
        });

        res.status(200).json({
            message: "Data fetched successfully",
            data1,
            data2
        });
    } catch (error) {
        console.error("Error fetching data", error);
        res.status(500).json({ message: "Error fetching data" });
    }
};

const orders = (req, res) => {
    Order.find({}).exec()
        .then(data => res.status(200).json({ msg: "Data Fetched Successfully", data }))
        .catch(error => {
            console.error("Error occurred", error);
            res.status(500).json({ msg: "No Data", error });
        });
};

const ord = (req, res) => {
    Order.find({})
        .populate("pdtid")
        .populate("custid")
        .exec()
        .then(data => res.status(200).json({ msg: "Order Success", data }))
        .catch(error => {
            console.error("Error occurred", error);
            res.status(500).json({ msg: "Error", error });
        });
};

const cardpay = (req, res) => {
    Order.findByIdAndUpdate(req.params.id, { paymentstatus: true }, { new: true }).exec()
        .then(data => res.status(200).json({ message: "Status updated", data }))
        .catch(error => {
            console.error("Error occurred", error);
            res.status(500).json({ message: "Error updating status", error });
        });
};

const cancelOrder = (req, res) => {
    Order.findByIdAndDelete(req.params.id).exec()
        .then(() => res.status(200).json({ message: "Order cancelled successfully" }))
        .catch(error => {
            console.error("Error occurred", error);
            res.status(500).json({ message: "Error cancelling order", error });
        });
};


const placeOrder = async (req, res) => {
    try {
        const { userid, products, paymenttype, shippingaddress, deliverydate, totalamount } = req.body;


        const updatedProducts = [];
        for (const product of products) {
            const productDoc = await Product.findById(product.pdtid);
            if (!productDoc) {
                return res.status(400).json({ status: 400, error: `Product with id ${product.pdtid} not found` });
            }

            if (product.quantity > productDoc.quantity) {
                return res.status(400).json({ status: 400, error: `Insufficient stock for product ${product.pdtid}` });
            }

            productDoc.quantity -= product.quantity;
            await productDoc.save();
            updatedProducts.push({
                pdtid: product.pdtid,
                quantity: product.quantity,
            });
        }


        const newOrder = new Order({
            userid,
            products: updatedProducts,
            paymenttype,
            shippingaddress,
            deliverydate,
            totalamount,
        });

        const savedOrder = await newOrder.save();
        res.status(200).json({ status: 200, data: savedOrder });
    } catch (error) {
        console.error("Error placing order", error);
        res.status(500).json({ status: 500, error: "Failed to place order" });
    }
};


module.exports = { orderlist, ordpdt, orders, ord, cardpay, cancelOrder, placeOrder };
