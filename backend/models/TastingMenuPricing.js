const mongoose = require('mongoose')
const TastingMenuPricingSchema = new mongoose.Schema({
    tastingMenuPrice:{type:Number},
    winePairingPrice:{type:Number}
})

module.exports = mongoose.model('TastingMenuPricing',TastingMenuPricingSchema)