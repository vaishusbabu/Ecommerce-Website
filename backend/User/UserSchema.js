const mongoose = require('mongoose')
const userschema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
})
const customermodel = mongoose.model("Customer", userschema)

module.exports = customermodel