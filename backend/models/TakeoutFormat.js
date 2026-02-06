const mongoose = require('mongoose')
const TakeoutFormatSchema = new mongoose.Schema({
    pageMargin:{type:Number},
    takeoutItemMarginsTopBottom:{type:Number},
    takeoutItemMarginsLeftRight:{type:Number}
})

module.exports = mongoose.model('TakeoutFormat',TakeoutFormatSchema)
