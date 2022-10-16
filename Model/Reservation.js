const mongoose = require('mongoose');


const ReservationSchema = mongoose.Schema({

    Name_Car: String,
    Numero_Car:String,
    Ville_Depart:String,
    Date_depart: Date,
    Hours : String,

});

module.exports = mongoose.model('Reservation', ReservationSchema);d