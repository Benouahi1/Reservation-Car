const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const carRoute = require('./Controller/Car');
const UserRoute = require('./Controller/user');
const AdminRoute = require('./Controller/Admin');
const VoyagesRoute = require('./Controller/Voyages');



app.use(bodyParser.json());


app.use('/Voyages',VoyagesRoute);
app.use('/Car',carRoute);
app.use('/User',UserRoute);
app.use('/Admin',AdminRoute);



app.get('/', (req, res) =>{

res.send('welcome message');

});


//conect dbjj
mongoose.connect(
            process.env.DB_CONNECTION,
        { useNewUrlParser: true },()=>
        console.log('nnnn')
)




app.listen(3000);


