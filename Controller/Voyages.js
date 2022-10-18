const express = require('express');


const router = express.Router();



const Voyages = require('../Model/Voyages');



router.get('/', async (req, res)=>{
  try{
const Voyer = await Voyages.find();
res.json(Voyer[1].Circulation[0]);
  }catch(err){
    res.json({message: err});
  }
});


router.post('/Add', async (req, res)=>{
 const Voyer = new Voyages({
    Name_Car: req.body.Name_Car,
    Numero_Car: req.body.Numero_Car,
    Ville_Depart: req.body.Ville_Depart,
    Date_depart: req.body.Date_depart,
    Hours: req.body.Hours,
    Circulation: req.body.Circulation,
    Hours_Circulation: req.body.Hours_Circulation,

 });


try{
    const savedVoyer = await Voyer.save();
    res.json(savedVoyer);
}catch(err){
    res.json({message: err});
}

});

module.exports = router;