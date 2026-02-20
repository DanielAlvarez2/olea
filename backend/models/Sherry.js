const mongoose = require('mongoose')

const SherrySchema = new mongoose.Schema({
    grapes:{type:String},
    name:{type:String},
    description:{type:String},
    price:{type:Number}
},{timestamps:true})

module.exports = mongoose.model('Sherry',SherrySchema)
