const mongoose = require('mongoose')
const ParentsWeekendFormatSchema = new mongoose.Schema({
    // pageMargin:{type:Number},
    itemMarginsTopBottom:{type:Number},
    itemMarginsLeftRight:{type:Number}
})

module.exports = mongoose.model('ParentsWeekendFormat',ParentsWeekendFormatSchema)
