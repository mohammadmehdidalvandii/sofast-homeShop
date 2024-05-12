const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    email:{
        type : String,
        required: true,
    },

    password:{
        type:String,
        required:true,
    },
    role:{
        type: String,
        default:"User"
    },

    refreshToken : String,
})


const model = mongoose.models.User || mongoose.model("User" , schema);
module.exports = model;