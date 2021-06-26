const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    billAddress:{
        type: String,
        required:false
    },
    billPostalCode:{
        type: String,
        required:false
    },
    billCity:{
        type: String,
        required:false
    },
    billCounty:{
        type: String,
        required:false
    },
    shipAddress:{
        type: String,
        required:false
    },
    shipPostalCode:{
        type: String,
        required:false
    },
    shipCity:{
        type: String,
        required:false
    },
    shipCounty:{
        type: String,
        required:false
    },
    phone:{
        type:String,
        required:false
    },
    role: {
        type: String,
        required: false,
        default:'customer'
    },
    date: {
        type: Date,
        default: Date.now,
        required: false
    }
});
module.exports = mongoose.model('user',UserSchema);
