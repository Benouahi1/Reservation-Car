const mongoose = require('mongoose');


const CarSchema = mongoose.Schema({

    car:{
        type: String,
        required: true,
    },
    chefeur:{
        type: String,
        required: true,
    },
    Numero_Car:{
        type: String,
        required: true,
    },
   
    

});

module.exports = mongoose.model('car', CarSchema);