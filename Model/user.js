const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({

    UserName:String,
    Gmail:String,
    Password:String,
   
   
    

});

module.exports = mongoose.model('User', UserSchema);