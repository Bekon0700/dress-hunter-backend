const catchAsync = require('./../utils/catchAsync')
const AppError = require("../utils/appError");

exports.addProduct = catchAsync( async (req, res) => {
    const product = req.body

    res.status(201).json({
        status: 'success',
        product
    })
})