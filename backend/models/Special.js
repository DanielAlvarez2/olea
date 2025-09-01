const mongoose = require('mongoose')
const SpecialSchema = new mongoose.Schema({
    section:{type:String},
    name:{type:String},
    description:{type:String},
    price:{type:String},
    sequence:{type:Number}
},{timestamps:true})

module.exports = mongoose.model('Special',SpecialSchema)
