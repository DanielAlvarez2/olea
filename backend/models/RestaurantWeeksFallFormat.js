const mongoose = require('mongoose')
const RestaurantWeeksFallFormatSchema = new mongoose.Schema({
    // pageMargin:{type:Number},
    RightMenuItemMarginsTopBottom:{type:Number},
    rightMenuItemMarginRight:{type:Number},
    LeftMenuItemMarginsTopBottom:{type:Number},
    logoHeight:{type:Number},
    logoRight:{type:Number},
    logoTop:{type:Number},
})

module.exports = mongoose.model('RestaurantWeeksFallFormat',RestaurantWeeksFallFormatSchema)
