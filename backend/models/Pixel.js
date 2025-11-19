const mongoose = require('mongoose')
const PixelSchema = new mongoose.Schema({
    pixel:{type:Number},
    menu:{type:String},
    name:{type:String}
})

module.exports = mongoose.model('Pixel',PixelSchema)
