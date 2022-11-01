


const carRoute = require('../Controller/Car');
const UserRoute = require('../Controller/user');
const AdminRoute = require('../Controller/Admin');
const VoyagesRoute = require('../Controller/Voyages');
const ReservationRoute = require('../Controller/Reservation');


app.use('/Voyages',VoyagesRoute);
app.use('/Car',carRoute);
app.use('/User',UserRoute);
app.use('/Admin',AdminRoute);
app.use('/Reserve',ReservationRoute);
