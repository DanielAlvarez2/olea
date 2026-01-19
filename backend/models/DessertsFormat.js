const mongoose = require('mongoose')
const DessertsFormatSchema = new mongoose.Schema({
    pageMarginRight:{type:Number},
    dessertItemMarginsTopBottom:{type:Number}
})

module.exports = mongoose.model('DessertsFormat',DessertsFormatSchema)
