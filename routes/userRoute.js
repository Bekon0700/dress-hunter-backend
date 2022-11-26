const express = require('express');
const { createUser, getAllUser, updateUser, deleteUser, createToken, checkAuth, restrictedTo, myOrders } = require('../controllers/userController');

const router = express.Router()

router.route('/')
    .get(checkAuth,restrictedTo(['admin']), getAllUser)
    .post(createUser)

router.route('/loginCreateToken')
    .post(createToken)

router.route('/myOders')
    .get(checkAuth, restrictedTo(['buyer']), myOrders)

router.route('/:userId')
    .patch(checkAuth, restrictedTo(['admin']) , updateUser)
    .delete(checkAuth, restrictedTo(['admin']), deleteUser)


module.exports = router