const catchAsync = require('./../utils/catchAsync')
const AppError = require("../utils/appError");
const Product = require('../models/productModel');

exports.addProduct = catchAsync( async (req, res) => {
    const product = {
        ...req.body,
        sellerId: req.user._id
    }
    const addProd = await Product.create(product)

    res.status(201).json({
        status: 'success',
        addProd
    })
})

exports.getAllCategory = catchAsync( async (req, res) => {
    const product = {
        ...req.body,
        sellerId: req.user._id
    }
    const addProd = await Product.create(product)

    res.status(201).json({
        status: 'success',
        addProd
    })
})