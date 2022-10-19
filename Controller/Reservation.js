const express = require('express');


const router = express.Router();



const Reserve = require('../Model/Reservation');



router.get('/', async (req, res)=>{
  try{
const Voyer = await Reserve.find();
res.json(Voyer);
  }catch(err){
    res.json({message: err});
  }
});

router.get('/:ReserveId', async (req, res)=>{
  let i = 0
  try{
    const Reserver = await  Reserve.find({_id:req.params.ReserveId})
    res.json(Reserver);

    
  }catch(err){
    res.json({message: err});
  }
});


router.post('/Add', async (req, res)=>{
 const Reserver = new Reserve({
    Nom_Utilisateur: req.body.Nom_Utilisateur,
    Numero_Car: req.body.Numero_Car,
    ville_Depare: req.body.ville_Depare,
    Date_depart: req.body.Date_depart,
    hours_Depart: req.body.hours_Depart,
    Prix: req.body.Prix,
    ville_Collections: req.body.ville_Collections,
 });


try{
    const savedReserver = await Reserver.save();
    res.json(savedReserver);
}catch(err){
    res.json({message: err});
}

});

module.exports = router;