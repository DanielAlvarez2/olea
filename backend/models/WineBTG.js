const mongoose = require('mongoose')
const WineBTGSchema = new mongoose.Schema({
    menu:{type:String},
    section:{type:String},
    grapes:{type:String},
    name:{type:String},
    vintage:{type:String},
    description:{type:String},
    price:{type:String},
},{timestamps:true})

module.exports = mongoose.model('WineBTG',WineBTGSchema)
