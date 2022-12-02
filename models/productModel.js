const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
        productName: String,
        category: String,
        contactNumber: String,
        conditionType: {
            type: String,
            enum: ['Excellent', 'Good', 'Fair'],
            default: 'Fair'
        },
        originalPrice: Number,
        resalePrice: Number,
        location: String,
        ProductImg: String,
        usedTime: String,
        img: String,
        sold: {
            type: Boolean,
            default: false,
        },
        isAdvetised: {
            type: Boolean,
            default: false
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        sellerId: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product