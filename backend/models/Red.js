const mongoose = require('mongoose')

const RedSchema = new mongoose.Schema({
    category:{type:String},
    grapes:{type:String},
    name:{type:String},
    vintage:{type:String},
    description:{type:String},
    price:{type:Number},
    halfBottlePrice:{type:Number},
    categorySequence:{type:Number},
},{timestamps:true})

module.exports = mongoose.model('Red',RedSchema)
