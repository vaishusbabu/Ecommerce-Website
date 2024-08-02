const mongoose = require('mongoose');
const pdtschema = mongoose.Schema({
    pdtname: String,
    quantity: String,
    price: String,
    img: [String],
});
const customermodel = mongoose.model("Product", pdtschema);
module.exports = customermodel;
