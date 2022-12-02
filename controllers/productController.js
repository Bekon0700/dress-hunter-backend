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

exports.advertiseProduct = catchAsync( async (req, res) => {
    const id = req.body.id;

    const addProd = await Product.findByIdAndUpdate(id, {
        isAdvetised: true
    })

    res.status(200).json({
        status: 'success',
    })
})

exports.getAllCategory = catchAsync( async (req, res) => {
    const categories = await Product.aggregate([
        {
            $group: {
                _id: "$category"
            },
        }
    ])

    res.status(201).json({
        status: 'success',
        length: categories.length,
        categories
    })
})

exports.getAdverProducts = catchAsync( async (req, res) => {
    const products = await Product.find({isAdvetised: true}).populate('sellerId')

    res.status(201).json({
        status: 'success',
        products
    })
})

exports.getSpecificCategory = catchAsync( async (req, res) => {
    const {categoryName} = req.params;
    const products = await Product.find({category: categoryName}).populate('sellerId')
    res.status(201).json({
        status: 'success',
        length: products.length,
        products
    })
})