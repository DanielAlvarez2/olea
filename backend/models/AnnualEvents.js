const mongoose = require('mongoose')

const AnnualEventsSchema = new mongoose.Schema({
    ValentinesDay:{type:Boolean},
    RestaurantWeekSpring:{type:Boolean},
    MothersDay:{type:Boolean},
    Commencement:{type:Boolean},
    GraduationLunch:{type:Boolean},
    OleaAnniversary:{type:Boolean},
    ParentsWeekend:{type:Boolean},
    RestaurantWeekFall:{type:Boolean},
    NewYearsEve:{type:Boolean}
},{timestamps:true})

module.exports = mongoose.model('AnnualEvents',AnnualEventsSchema)