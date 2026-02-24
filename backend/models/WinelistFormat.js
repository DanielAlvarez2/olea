const mongoose = require('mongoose')
const WinelistFormatSchema = new mongoose.Schema({
    pageMargin:{type:Number},
    winelistItemMarginsTopBottom:{type:Number},
})

module.exports = mongoose.model('WinelistFormat',WinelistFormatSchema)
