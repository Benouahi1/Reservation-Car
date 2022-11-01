const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const carRoute = require('./Controller/Car');
const UserRoute = require('./Controller/user');
const AdminRoute = require('./Controller/Admin');
const VoyagesRoute = require('./Controller/Voyages');
const ReservationRoute = require('./Controller/Reservation');
const cors = require('cors')
//conect dbjj
mongoose.connect(
    process.env.DB_CONNECTION,
{ useNewUrlParser: true },(req)=>
console.log('database conection')
)


app.use(bodyParser.json());

app.use(cors());
app.use('/Voyages',VoyagesRoute);
app.use('/Car',carRoute);
app.use('/User',UserRoute);
app.use('/Admin',AdminRoute);
app.use('/Reserve',ReservationRoute);
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*"); 
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//   if (req.method == "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//     return res.status(200).json({});
//   }

//   next();
//   })

app.get('/', (req, res) =>{

res.send('welcome message');

});







app.listen(5000);


