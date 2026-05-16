const mongoose = require('mongoose')
const AnnualEventsMenuItemSchema = new mongoose.Schema({
    event:{type:String},
    section:{type:String},
    name:{type:String},
    allergiesAbbreviated:{type:String},
    allergiesComplete:{type:String},
    description:{type:String},
    sequence:{type:Number},
    cloudinary_secure_URL:{type:String},
    cloudinary_public_ID:{type:String}
},{timestamps:true})

module.exports = mongoose.model('AnnualEventsMenuItem',AnnualEventsMenuItemSchema)
