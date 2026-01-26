const mongoose = require('mongoose')
const DessertDrinkSchema = new mongoose.Schema({
    menu:{type:String},
    section:{type:String},
    category:{type:String},
    categorySequence:{type:Number},
    preDescription:{type:String},
    name:{type:String},
    postDescription:{type:String},
    price:{type:String},
    sequence:{type:Number}
},{timestamps:true})

module.exports = mongoose.model('DessertDrink',DessertDrinkSchema)
