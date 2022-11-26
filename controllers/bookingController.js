const catchAsync = require('./../utils/catchAsync')
const AppError = require("../utils/appError");
const Product = require('../models/productModel');
const Booking = require('../models/bookingModel');

exports.bookNow = catchAsync( async (req, res) => {
    const info = {
        ...req.body,
        buyerId: req.user._id,
    }
    const booking = await Booking.create(info)
    res.status(201).json({
        status: 'success',
        booking
    })
})