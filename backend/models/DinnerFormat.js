const mongoose = require('mongoose')
const DinnerFormatSchema = new mongoose.Schema({
    pageMargin:{type:Number},
    dinnerItemMarginsTopBottom:{type:Number},
    dinnerItemMarginsLeftRight:{type:Number}
})

module.exports = mongoose.model('DinnerFormat',DinnerFormatSchema)
