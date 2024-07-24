const express = require('express')
const router = express.Router()

const user = require('./User/userController')

//users
router.post('/insertdata', user.adduser)
router.post('/custlogin', user.login)
router.post('/delete/:id', user.delcust)
router.post('/allcust', user.viewcust)


module.exports = router



