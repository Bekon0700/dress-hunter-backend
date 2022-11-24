const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
        productName: String,
        category: String,
        contactNumber: String,
        conditionType: String,
        originalPrice: Number,
        resalePrice: Number,
        location: String,
        ProductImg: String,
        usingYear: Number,
        createdAt: {
            type: Date,
            default: Date.now()
        },
        userId: {
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