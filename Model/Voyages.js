const mongoose = require('mongoose');


const VoyagesSchema = mongoose.Schema({

    Name_Car: {
        type: String,
        required: true,
    },
    Numero_Car:{
        type: String,
        required: true,
    },
    Ville_Depart:{
        type: String,
        required: true,
    },
    Date_depart:{
        type: Date,
        required: true,
    },
    Hours : {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('Voyages', VoyagesSchema);d