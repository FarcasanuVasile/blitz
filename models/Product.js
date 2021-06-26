const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type:Number,
        required:true
    },
    description:{
        type: String,
        required: false,
    },
    imagePaths:{
        type:[],
        required:false
    },
    active:
    {
        type:Boolean,
        default:true
    },
    deleted: {
        type:Boolean,
        default:false
    },
    date: {
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('product',ProductSchema);