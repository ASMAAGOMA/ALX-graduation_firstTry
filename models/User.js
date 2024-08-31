const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    order_history: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'

    }],
    roles:[{
        type: String,
        default: "User"
    }],
    active: {
        type: Boolean,
        default: true
    }
})
module.exports = mongoose.model('User', userSchema)
