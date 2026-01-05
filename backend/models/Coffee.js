const mongoose = require('mongoose')
const CoffeeSchema = new mongoose.Schema({
    menu:{type:String},
    section:{type:String},
    name:{type:String},
    price:{type:String},
    sequence:{type:Number}
},{timestamps:true})

module.exports = mongoose.model('Coffee',CoffeeSchema)
