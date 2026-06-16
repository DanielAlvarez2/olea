const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{type:String},
    email:{type:String,unique:true},
    password:{type:String},
    role:{type:String},
    accountCreated:{type:Number} //Date.now() = time in ms
},{timestamps:true})

module.exports = mongoose.model('User',UserSchema)
