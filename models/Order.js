const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
    products : {
        type: [],
        required:true,
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports  = mongoose.Schema('order',OrderSchema);