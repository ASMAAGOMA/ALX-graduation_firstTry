const mongoose = require('mongoose')
const { stringify } = require('uuid')

const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    availability: {
        type: Boolean,
        default: true
    }
})
module.exports = mongoose.model('Product', productSchema)
