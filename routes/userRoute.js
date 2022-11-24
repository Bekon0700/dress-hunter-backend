const express = require('express');
const { createUser, getAllUser, updateUser, deleteUser, createToken, checkAuth, restrictedTo } = require('../controllers/userController');

const router = express.Router()

router.route('/')
    .get(getAllUser)
    .post(createUser)

router.route('/loginCreateToken')
    .post(createToken)

router.route('/:userId')
    .patch(checkAuth, restrictedTo(['admin']) , updateUser)
    .delete(checkAuth, restrictedTo(['admin']), deleteUser)


module.exports = router