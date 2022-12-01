const catchAsync = require('./../utils/catchAsync')
const AppError = require("../utils/appError");
const APIFeature = require('./../utils/apiFeatures')
const jwt = require('jsonwebtoken');
const User = require('../models/userMode');
const { findById, findByIdAndUpdate } = require('../models/userMode');
const Booking = require('../models/bookingModel');

const signToken = (email) => {
    return jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};


exports.createToken = catchAsync(async(req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return next(new AppError('Not a valid user', 403))
    }
    const token = signToken(req.body.email);
    
    res.status(201).json({
        status: 'success',
        token,
    });
})

exports.restrictedTo = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new AppError('You do not have the permission to do this operation', 403))
        }
        next()
    }
}



exports.checkAuth = catchAsync(async (req, res, next) => {
    const header = req.headers.authorization?.split(' ')[1]
    if (!header) {
        return next(new AppError('Unauthorized user', 401))
    }
    jwt.verify(header, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return next(new AppError('Unauthorized user', 401))
        } else {
            const user = await User.findOne({ email: decoded.email })
            if (!user) {
                return next(new AppError('Not a valid token', 403))
            }
            req.user = user
            next()
        }
    })
})

exports.getAllUser = catchAsync(async (req, res, next) => {
    if (req.query.role == 'admin') {
        return next(new AppError('Restricted query!', 403))
    }
    const query = User.find()
    const features = new APIFeature(query, req.query).filter().sort().fieldLimit().pagination()
    const users = await features.query

    res.status(201).json({
        status: 'success',
        users
    })
})

exports.createUser = catchAsync(async (req, res) => {
    const user = req.body

    const createUser = await User.create(user)

    res.status(201).json({
        status: 'success',
        user: createUser
    })
})

exports.singleUser = catchAsync(async (req, res) => {
    const user = req.user
    console.log(user)
    res.status(201).json({
        status: 'success',
        user
    })
})

exports.deleteUser = catchAsync(async (req, res) => {
    const id = req.params.userId

    const user = await User.findByIdAndDelete(id)

    res.status(200).json({
        status: 'success',
    })
})

exports.updateSellerStatus = catchAsync(async (req, res) => {
    const id = req.params.userId;
    await User.findByIdAndUpdate(id, { verified: req.body.verify })
    res.status(200).json({
        status: 'success',
    })
})

exports.myOrders = catchAsync(async (req, res) => {
    const buyerId = req.user._id;

    const oders = await Booking.find({ buyerId }).populate('productId')

    res.status(200).json({
        status: 'success',
        count: oders.length,
        oders
    })
})

