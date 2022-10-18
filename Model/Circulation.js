const mongoose = require('mongoose');


const CirculationSchema = mongoose.Schema({

    Numero_Car:{
        type: String,
        required: true,
    },
    
   
    

});

module.exports = mongoose.model('Circulation', CirculationSchema);