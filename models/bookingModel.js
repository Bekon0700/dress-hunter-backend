const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
    {
        buyerId: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
        },
        buyerPhoneNumber: String,
        meetingLocation: String,
        sellerId: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
        },
        productId: {
            type: mongoose.Schema.ObjectId,
            ref: 'Product',
        },
        paid: {
            type: Boolean,
            default: false
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking