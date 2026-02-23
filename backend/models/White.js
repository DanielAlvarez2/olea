const mongoose = require('mongoose')

const WhiteSchema = new mongoose.Schema({
    grapes:{type:String},
    name:{type:String},
    vintage:{type:String},
    description:{type:String},
    price:{type:Number}
},{timestamps:true})

module.exports = mongoose.model('White',WhiteSchema)
