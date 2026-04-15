const mongoose = require('mongoose')
const SpecialSchema = new mongoose.Schema({
    menu:{type:String},
    section:{type:String},
    name:{type:String},
    allergiesAbbreviated:{type:String},
    allergiesComplete:{type:String},
    description:{type:String},
    price:{type:String},
    sequence:{type:Number},
    cloudinary_secure_URL:{type:String},
    cloudinary_public_ID:{type:String}
},{timestamps:true})

module.exports = mongoose.model('Special',SpecialSchema)
