const express = require('express');
const { addProduct, getAllCategory, getSpecificCategory, advertiseProduct, getAdverProducts } = require('../controllers/productController');
const { checkAuth, restrictedTo } = require('../controllers/userController');

const router = express.Router()

router.route('/')
    .post(checkAuth, restrictedTo(['seller']), addProduct);

router.route('/advertise')
    .patch(checkAuth, restrictedTo(['seller']), advertiseProduct);

router.route('/category')
    .get(getAllCategory)

router.route('/adverProducts')
    .get(getAdverProducts)

router.route('/category/:categoryName')
    .get(getSpecificCategory)


module.exports = router