const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://vaishusbabu:Qwerty@123@cluster0.0jyfdki.mongodb.net/")
// mongoose.connect("mongodb://localhost:27017")
var db = mongoose.connection

db.on("error", console.error.bind("error"))

db.once("open", function () {
    console.log("Connection Successfull")
})

module.exports = db