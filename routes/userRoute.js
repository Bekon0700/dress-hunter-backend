const express = require('express');
const { createUser, getAllUser, deleteUser, createToken, checkAuth, restrictedTo, myOrders, updateSellerStatus, singleUser, myProducts } = require('../controllers/userController');

const router = express.Router()

router.route('/')
    .get(checkAuth, restrictedTo(['admin']), getAllUser)
    .post(createUser)

router.route('/loginCreateToken')
    .post(createToken)

router.route('/single-user')
    .get(checkAuth, singleUser)

router.route('/myOders')
    .get(checkAuth, restrictedTo(['buyer']), myOrders)

router.route('/myProducts')
    .get(checkAuth, restrictedTo(['seller']), myProducts)

router.route('/:id')
    .patch(checkAuth, restrictedTo(['admin']) , updateSellerStatus)
    .delete(checkAuth, restrictedTo(['admin']), deleteUser)


module.exports = router