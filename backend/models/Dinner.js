const mongoose = require('mongoose')
const DinnerSchema = new mongoose.Schema({
    menu:{type:String},
    section:{type:String},
    name:{type:String},
    allergiesAbbreviated:{type:String},
    allergiesComplete:{type:String},
    descriptionIntro:{type:String},
    description:{type:String},
    postDescription:{type:String},
    price:{type:String},
    sequence:{type:Number}
},{timestamps:true})

module.exports = mongoose.model('Dinner',DinnerSchema)
