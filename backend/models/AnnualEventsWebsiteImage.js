const mongoose = require('mongoose')

const AnnualEventsWebsiteImageSchema = new mongoose.Schema({
    event:{type:String},
    cloudinary_secure_URL:{type:String},
    cloudinary_public_ID:{type:String}
},{timestamps:true})

module.exports = mongoose.model('AnnualEventsWebsiteImage',AnnualEventsWebsiteImageSchema)
