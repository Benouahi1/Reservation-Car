const mongoose = require('mongoose');


const ReserveSchema = mongoose.Schema({

    Nom_Utilisateur: {
        type: String,
        required: true,
    },
    Numero_Car:{
        type: String,
        required: true,
    },
    ville_Depare:{
        type: String,
        required: true,
    },
    Date_depart:{
        type: Date,
        required: true,
    },
    hours_Depart:{
        type: String,
        required: true,
    },
    Prix:{
        type: String,
        required: true,
    },
    ville_Collections:{
        type : String,
        required: true,
    },
    
    
   

});

module.exports = mongoose.model('Reserve', ReserveSchema);