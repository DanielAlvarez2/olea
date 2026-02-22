const mongoose = require('mongoose')

const SangriaSchema = new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    glassPrice:{type:Number},
    pitcherPrice:{type:Number},
    sequence:{type:Number}
},{timestamps:true})

module.exports = mongoose.model('Sangria',SangriaSchema)
