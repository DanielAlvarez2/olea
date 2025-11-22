const mongoose = require('mongoose')
const SpecialsFormatSchema = new mongoose.Schema({
    PageMarginsLeftRight:{type:Number},
    MenuItemsMarginTopBottom:{type:Number},
    DoubleSided:{type:Boolean},
    LetterPaper:{type:Boolean},
    ShowLegalText:{type:Boolean}
})

module.exports = mongoose.model('SpecialsFormat',SpecialsFormatSchema)
