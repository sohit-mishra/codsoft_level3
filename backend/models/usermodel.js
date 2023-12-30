const mongoose = require("mongoose");
var jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    phonenumber:{
        type:Number,
        require:true
    },
    password: {
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:true
    }
})

const User = new mongoose.model("User",userSchema);
module.exports = User;