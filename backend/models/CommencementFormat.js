const mongoose = require('mongoose')

const CommencementFormatSchema = new mongoose.Schema({
    pageMargin:{type:Number},
    itemMarginsTopBottom:{type:Number},
    itemMarginsLeftRight:{type:Number}
})

module.exports = mongoose.model('CommencementFormat',CommencementFormatSchema)
