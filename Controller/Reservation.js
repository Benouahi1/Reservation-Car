const express = require('express');


const router = express.Router();



const Reservation = require('../Model/Reservation');



router.get('/', async (req, res)=>{
  try{
const Reserve = await Reservation.find();
res.json(Reserve);
  }catch(err){
    res.json({message: err});
  }
});


router.post('/',async (req, res)=>{
 const Reserve = new Reservation({
    Name_Car: req.body.Name_Car,
    Numero_Car: req.body.Numero_Car,
    Ville_Depart: req.body.Ville_Depart,
    Date_depart: req.body.Date_depart,
    Point_circulation: req.body.Point_circulation,
 });
try{
    const savedReserve = await Reserve.save();
    res.json(savedReserve);
}catch(err){
    res.json({message: err});
}

});

module.exports = router;