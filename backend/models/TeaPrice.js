const mongoose = require('mongoose')
const TeaPriceSchema = new mongoose.Schema({
    price:{type:String}
},{timestamps:true})

module.exports = mongoose.model('TeaPrice',TeaPriceSchema)
