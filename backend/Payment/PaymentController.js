const stripe = require('stripe')('sk_test_51PkJjT07k5vAkIOryT75g5XwlFnny18DRXN7j5OapI3F9StwyeihryvWmIJZDZAQzHRQZXr8sbIYL3F3i6dNGrv500strTFsyD');
const Payment = require('./PaymentSchema')

const createPaymentIntent = async (req, res) => {
    try {
        const { amount, payment_method_id, order_id } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method: payment_method_id,
            confirm: true,
        });

        const payment = new Payment({
            amount: amount ,
            paymentIntentId: paymentIntent.id,
            status: paymentIntent.status,
        });

        await payment.save();

        await Order.findByIdAndUpdate(order_id, { paymentId: payment._id });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error('Error creating payment intent:', error);
        res.status(500).json({ error: 'Failed to create payment intent' });
    }
};


const cardpay = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { paymentstatus: true },
            { new: true }
        ).populate('paymentId');

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        if (order.paymentId) {
            await Payment.findByIdAndUpdate(order.paymentId, { status: 'succeeded' });
        }

        res.status(200).json({ message: 'Payment status updated', data: order });
    } catch (error) {
        console.error('Error updating payment status:', error);
        res.status(500).json({ message: 'Error updating payment status', error });
    }
};

module.exports = {

    createPaymentIntent,
    cardpay
};