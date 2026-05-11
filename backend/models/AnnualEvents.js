const mongoose = require('mongoose')

const AnnualEventsSchema = new mongoose.Schema({
    section:{type:String},
    name:{type:String},
    description:{type:String},
    price:{type:Number},
},{timestamps:true})

module.exports = mongoose.model('Beer',BeerSchema)
