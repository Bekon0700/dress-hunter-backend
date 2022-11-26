const express = require('express');
const { addProduct, getAllCategory } = require('../controllers/productController');
const { checkAuth, restrictedTo } = require('../controllers/userController');

const router = express.Router()

router.route('/')
    .post(checkAuth, restrictedTo(['seller']), addProduct);

router.route('category')
    .get(getAllCategory)


module.exports = router