const express = require('express');
const { adduser, login, viewcust, delcust } = require('./User/userController');
const { addpdt, allpdt, dltpdt, editpdt, idfetch } = require('./Pdt/PdtController');
const { cartlist, viewcart } = require('./Cart/CartController');
const { orderlist, ordpdt } = require('./Order/OrderController')
const router = express()

//user 
router.post('/insertdata', adduser)
router.post('/custlogin', login)
router.post('/allcust', viewcust)
router.post('/delete/:id', delcust)

//pdt 
router.post('/addpdt', addpdt)
router.post('/allpdt', allpdt)
router.post('/delpdt/:id', dltpdt)
router.post('/editpdt/:id', editpdt)
router.post('/idfetch/:id', idfetch)

//cart
router.post('/cartlist/:id', cartlist)
router.post('/viewcart/:id', viewcart)

//order
router.post('/orderlist/:id', orderlist)
router.post('/ordpdt/:id', ordpdt)

module.exports = router;

