const mongoose = require('mongoose')

const SessionSchema = new mongoose.Schema({
  userID:{type:String},
  createdAt:{type:Number},
  sessionID:{type:String}
},{timestamps:true})

module.exports = mongoose.model('Session',SessionSchema)