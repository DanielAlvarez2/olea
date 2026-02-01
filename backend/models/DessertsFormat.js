const mongoose = require('mongoose')
const DessertsFormatSchema = new mongoose.Schema({
    pageMarginRight:{type:Number},
    pageMarginRightBack:{type:Number},
    dessertItemMarginsTopBottom:{type:Number},
    categoriesMarginTop:{type:Number}
})

module.exports = mongoose.model('DessertsFormat',DessertsFormatSchema)
