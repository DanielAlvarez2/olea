const mongoose = require('mongoose')
const NonAlcoholicDrinkSchema = new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    price:{type:Number}
},{timestamps:true})

module.exports = mongoose.model('NonAlcoholicDrink',NonAlcoholicDrinkSchema)
