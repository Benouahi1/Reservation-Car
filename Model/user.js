const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({

    UserName:{
        type: String,
        required: true,
    },
    Gmail:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    }
   
   
    

});

module.exports = mongoose.model('User', UserSchema);