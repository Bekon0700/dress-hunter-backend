const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    role: {
        type: String,
        enum: ['seller', 'buyer'],
        default: 'buyer'
    },
    verified: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User