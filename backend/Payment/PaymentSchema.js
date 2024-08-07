
const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        default: 'usd',
    },
    paymentIntentId: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Payment', PaymentSchema);
