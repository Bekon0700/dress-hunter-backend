const express = require('express');
const { bookNow } = require('../controllers/bookingController');
const { checkAuth, restrictedTo } = require('../controllers/userController');

const router = express.Router()

router.route('/')
    .post(checkAuth, restrictedTo(['buyer']), bookNow);


module.exports = router