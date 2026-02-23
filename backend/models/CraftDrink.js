const mongoose = require('mongoose')

const CraftDrinkSchema = new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    price:{type:Number},
    sequence:{type:Number}
},{timestamps:true})

module.exports = mongoose.model('CraftDrink',CraftDrinkSchema)
