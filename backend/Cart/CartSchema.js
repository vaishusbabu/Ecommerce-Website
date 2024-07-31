const mongoose = require('mongoose')
const cartschema = mongoose.Schema({
    custid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers',        //table name
        required: true           //not null
    },
    pdtid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    date: {
        type: Date,
        required: true
    },

})
module.exports = mongoose.model('cart', cartschema)