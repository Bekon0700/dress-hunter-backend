const catchAsync = require('./../utils/catchAsync')
const AppError = require("../utils/appError");
const jwt = require('jsonwebtoken');

const signToken = (email) => {
    return jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};


exports.createToken = (req, res) => {
    const token = signToken(req.body.email);

    const cookieOptions = {
        httpOnly: true,
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        secure: true
    };

    // if (process.env.NODE_ENV === 'production') cookieOptions["secure"] = true;

    res.cookie('jwt', token, cookieOptions);

    res.status(201).json({
        status: 'success',
        token,
    });
};


exports.checkAuth = (req, res, next) => {
    const header = req.headers.authorization?.split(' ')[1]
    if (!header) {
        return next(new AppError('Unauthorized user', 401))
    }
    jwt.verify(header, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return next(new AppError('Unauthorized user', 401))
        } else {
            req.user = {
                email: decoded.email
            }
            next()
        }
    })
}

exports.createUser = catchAsync( async (req, res) => {
    const user = req.body

    res.status(201).json({
        status: 'success',
        user
    })
})