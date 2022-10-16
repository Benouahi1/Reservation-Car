const mongoose = require('mongoose');


const AdminSchema = mongoose.Schema({

    AdminName:String,
    GmailAdmin:String,
    Password:String,
   
    

});

module.exports = mongoose.model('Admin', AdminSchema);