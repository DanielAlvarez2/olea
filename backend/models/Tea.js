const mongoose = require('mongoose')
const TeaSchema = new mongoose.Schema({
    menu:{type:String},
    section:{type:String},
    type:{type:String},
    name:{type:String},
    sequence:{type:Number}
},{timestamps:true})

module.exports = mongoose.model('Tea',TeaSchema)
