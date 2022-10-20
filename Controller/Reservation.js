const express = require('express');


const router = express.Router();



const Reserve = require('../Model/Reservation');



router.get('/', async (req, res)=>{
  try{
const Reserver = await Reserve.find();
res.json(Reserver);
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
   
    
   
    
    try{
    const Reserver = new Reserve({
       NomUtilisateur: req.body.NomUtilisateur,
       NumeroCar: req.body.NumeroCar,
       villeDepare: req.body.villeDepare,
       DateDepart: req.body.DateDepart,
       hoursDepart: req.body.hoursDepart,
       Prix: req.body.Prix,
       villeCollections: req.body.villeCollections,
    });
    const Reserverid = await  Reserve.find({NumeroCar:req.body.NumeroCar})
 
    if(Reserverid.length > 50) {
   console.log("Car errour");
   }else{
    console.log(Reserverid.length+1);
    const savedReserver = await Reserver.save();
    res.json(savedReserver);
   }
}catch(err){
    res.json({message: err});
}

});

module.exports = router;