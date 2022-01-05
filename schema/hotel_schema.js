var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HotelSchema = new Schema({

    price : Number,
    imageMountain : String,
    nameMountain : String,
    imageHotel : String,
    nameHotel : String,
    locationHotel : String,
    nightDrop : String

});
module.exports = mongoose.model("HotelAvialable", HotelSchema); 