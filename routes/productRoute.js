const express = require('express');
const { addProduct, getAllCategory, getSpecificCategory } = require('../controllers/productController');
const { checkAuth, restrictedTo } = require('../controllers/userController');

const router = express.Router()

router.route('/')
    .post(checkAuth, restrictedTo(['seller']), addProduct);

router.route('/category')
    .get(getAllCategory)

router.route('/category/:categoryName')
    .get(getSpecificCategory)


module.exports = router