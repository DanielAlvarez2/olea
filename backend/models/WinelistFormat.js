const mongoose = require('mongoose')
const WinelistFormatSchema = new mongoose.Schema({
    pageMarginTopBottom:{type:Number},
    winelistItemMarginsLeftRight:{type:Number},
})

module.exports = mongoose.model('WinelistFormat',WinelistFormatSchema)
