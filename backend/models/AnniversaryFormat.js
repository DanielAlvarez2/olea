const mongoose = require('mongoose')

const AnniversaryFormatSchema = new mongoose.Schema({
    // pageMargin:{type:Number},
    itemMarginsTopBottom:{type:Number},
    itemMarginsLeftRight:{type:Number}
})

module.exports = mongoose.model('AnniversaryFormat',AnniversaryFormatSchema)
