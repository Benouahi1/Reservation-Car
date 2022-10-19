const express = require('express');


const router = express.Router();



const Voyages = require('../Model/Voyages');



router.get('/', async (req, res)=>{
  try{
const Voyer = await Voyages.find();
res.json(Voyer);
  }catch(err){
    res.json({message: err});
  }
});

router.get('/:Ville',async (req, res)=>{
  const Voyage = await  Voyages.find({_id:req.params.VoyageId})
  res.json(Voyage[0].Circulation[2]);
  const circl = Voyage[0].Circulation; 
  const h = Voyage[0].Hours_Circulation;
  const Prix = Voyage[0].Prix;
  for(let i = 0; i < circl.length; i++){
    if(i == 0){
      console.log(circl[i]+ ' ' + h[i])
    }else{
      console.log(circl[i]+ ' ' + h[i]+' '+Prix[i]+'.00 Dh'); 
    }
   
  
  }
 try{
     const savedCar = await care.save();
     res.json(savedCar);
 }catch(err){
     res.json({message: err});
 }
 
 });

router.get('/:VoyageId', async (req, res)=>{
  let i = 0
  try{
    const Voyage = await  Voyages.find({_id:req.params.VoyageId})
    res.json(Voyage[0].Circulation[2]);
    const circl = Voyage[0].Circulation; 
    const h = Voyage[0].Hours_Circulation;
    const Prix = Voyage[0].Prix;
    for(let i = 0; i < circl.length; i++){
      if(i == 0){
        console.log(circl[i]+ ' ' + h[i])
      }else{
        console.log(circl[i]+ ' ' + h[i]+' '+Prix[i]+'.00 Dh'); 
      }
     
    
    }
  }catch(err){
    res.json({message: err});
  }
});



router.post('/Add', async (req, res)=>{
 const Voyer = new Voyages({
    Name_Car: req.body.Name_Car,
    Numero_Car: req.body.Numero_Car,
    
    Date_depart: req.body.Date_depart,
   
    Circulation: req.body.Circulation,
    Hours_Circulation: req.body.Hours_Circulation,
    Prix: req.body.Prix,

 });


try{
    const savedVoyer = await Voyer.save();
    res.json(savedVoyer);
}catch(err){
    res.json({message: err});
}

});

module.exports = router;