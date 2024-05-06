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
    }
})


const model = mongoose.model.User || mongoose.model("User" , schema);
export default model;