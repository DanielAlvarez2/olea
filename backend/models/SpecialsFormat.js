const mongoose = require('mongoose')
const SpecialsFormatSchema = new mongoose.Schema({
    pageMarginsLeftRight:{type:Number},
    menuItemMarginsTopBottom:{type:Number},
    doubleSided:{type:Boolean},
    letterPaper:{type:Boolean},
    showLegalText:{type:Boolean}
})

module.exports = mongoose.model('SpecialsFormat',SpecialsFormatSchema)
