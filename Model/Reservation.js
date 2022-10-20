const mongoose = require('mongoose');


const ReserveSchema = mongoose.Schema({

    NomUtilisateur: {
        type: String,
        required: true,
    },
    NumeroCar:{
        type: String,
        required: true,
    },
    villeDepare:{
        type: String,
        required: true,
    },
    DateDepart:{
        type: Date,
        required: true,
    },
    hoursDepart:{
        type: String,
        required: true,
    },
    Prix:{
        type: String,
        required: true,
    },
    villeCollections:{
        type : String,
        required: true,
    },
    
    
   

});

module.exports = mongoose.model('Reserve', ReserveSchema);