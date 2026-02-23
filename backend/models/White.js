const mongoose = require('mongoose')

const WhiteSchema = new mongoose.Schema({
    category:{type:String},
    grapes:{type:String},
    name:{type:String},
    vintage:{type:String},
    description:{type:String},
    price:{type:Number},
    categorySequence:{type:Number},
},{timestamps:true})

module.exports = mongoose.model('White',WhiteSchema)
