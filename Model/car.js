const mongoose = require('mongoose');


const CarSchema = mongoose.Schema({

    car:String,
    chefeur:String,
    Numero_Car:String,
   
    

});

module.exports = mongoose.model('car', CarSchema);