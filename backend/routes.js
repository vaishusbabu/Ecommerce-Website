const express = require('express');
const { adduser, login, viewcust, delcust } = require('./User/userController');
const { addpdt } = require('./Pdt/PdtController')
const router = express()



//user 
router.post('/insertdata', adduser)
router.post('/custlogin', login)
router.post('/allcust', viewcust)
router.post('/delcust', delcust)

//pdt 
router.post('/addpdt', addpdt)


module.exports = router;

