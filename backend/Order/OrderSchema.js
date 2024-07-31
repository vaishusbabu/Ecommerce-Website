const mongoose = require('mongoose')
const orderschema = mongoose.Schema({
  custid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  pdtid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  date: {
    type: Date,
    required: true

  },
  deliverydate: {
    type: Date,

  },
  paymenttype: {
    type: String,
    required: true
  },
  paymentstatus: {
    type: Boolean,
    default: false
  },
  shippingaddress: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  totalamount: {
    type: Number,
    required: true
  }
})
module.exports = mongoose.model("order", orderschema)