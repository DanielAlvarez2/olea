const mongoose = require('mongoose')

const AnnualEventsSchema = new mongoose.Schema({
    DailySpecials:{type:Boolean},
    ValentinesDay:{type:Boolean},
    RestaurantWeeksSpring:{type:Boolean},
    MothersDay:{type:Boolean},
    Commencement:{type:Boolean},
    GraduationLunch:{type:Boolean},
    OleaAnniversary:{type:Boolean},
    ParentsWeekend:{type:Boolean},
    RestaurantWeeksFall:{type:Boolean},
    NewYearsEve:{type:Boolean}
},{timestamps:true})

module.exports = mongoose.model('AnnualEvents',AnnualEventsSchema)