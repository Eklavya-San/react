const mongoose = require('mongoose');
const Player = mongoose.Schema({
    Name:{type:String},
    City:{type:String},
    Age:{type:Number},
    Matched_played:{type:Number},
    Sport:{type:String},
    Dob:{type:String}
})

module.exports = mongoose.model("Player",Player);