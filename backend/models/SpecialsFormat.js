const mongoose = require('mongoose')
const SpecialsFormatSchema = new mongoose.Schema({
    pageMarginsLeftRight:{type:Number},
    pageMarginsLeftRightDessert:{type:Number},
    menuItemMarginsTopBottomDessert:{type:Number},
    menuItemMarginsTopBottom:{type:Number},
})

module.exports = mongoose.model('SpecialsFormat',SpecialsFormatSchema)
