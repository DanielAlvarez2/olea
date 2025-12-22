const mongoose = require('mongoose')
const DessertSchema = new mongoose.Schema({
    menu:{type:String},
    section:{type:String},
    name:{type:String},
    allergiesAbbreviated:{type:String},
    allergiesComplete:{type:String},
    description:{type:String},
    price:{type:String},
    sequence:{type:Number}
},{timestamps:true})

module.exports = mongoose.model('Dessert',DessertSchema)
