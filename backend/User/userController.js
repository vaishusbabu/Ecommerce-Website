const Schema = require('./UserSchema')

const adduser = (req, res) => {
    newuser = new Schema({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    })
    newuser.save()
        .then(data => {
            console.log("Saved Successfully")
            res.json({
                status: 200,
                msg: "Saved Succesfully",
                data: data
            })
        })
        .catch(error => {
            console.log("Error Occured")
            res.json({
                status: 500,
                msg: "Error",
                data: error
            })
        })


}
module.exports = { adduser }