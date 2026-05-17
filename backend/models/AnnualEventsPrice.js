const mongoose = require('mongoose')

const AnnualEventsPriceSchema = new mongoose.Schema({
    ValentinesDay:{type:Number},
    RestaurantWeekSpring:{type:Number},
    MothersDay:{type:Number},
    Commencement:{type:Number},
    GraduationLunch:{type:Number},
    OleaAnniversary:{type:Number},
    ParentsWeekend:{type:Number},
    RestaurantWeekFall:{type:Number},
    NewYearsEve:{type:Number}
},{timestamps:true})

module.exports = mongoose.model('AnnualEventsPrice',AnnualEventsPriceSchema)