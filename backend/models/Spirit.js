const mongoose = require('mongoose')
const SpiritSchema = new mongoose.Schema({
    category:{type:String},
    categorySequence:{type:Number},
    name:{type:String},
    price:{type:Number},
},{timestamps:true})

module.exports = mongoose.model('Spirit',SpiritSchema)
