const mongoose = require('mongoose')
const MothersDayFormatSchema = new mongoose.Schema({
    pageMargin:{type:Number},
    mothersDayItemMarginsTopBottom:{type:Number},
    mothersDayItemMarginsLeftRight:{type:Number}
})

module.exports = mongoose.model('MothersDayFormat',MothersDayFormatSchema)
