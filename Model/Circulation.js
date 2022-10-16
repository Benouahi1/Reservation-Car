const mongoose = require('mongoose');


const CirculationSchema = mongoose.Schema({

    Numero_Car:String,
    
   
    

});

module.exports = mongoose.model('Circulation', CirculationSchema);