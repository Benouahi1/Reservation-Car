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

router.get('/Cherche',async (req, res)=>{
  const Voyage = await  Voyages.find().select('Circulation Hours_Circulation Prix');

  // var Voyer = new table();
//   for (let i = 0; i < Voyage.length; i++) {
//    let Num = Voyage[i].Circulation.length;
   
//    for (let j = 0; j < Num-1; j++) {
//     // Voyer[i][j]=Voyage[i].Circulation[j] +" "+ Voyage[i].Hours_Circulation[j] +" h" + Voyage[i].Prix[j];
//     console.log(Voyage[i].Circulation[j] +" "+ Voyage[i].Hours_Circulation[j] +" h");
//    }
//    let date = Voyage[i].Date_depart;
//    let NowDay = new Date();
//   if(date.getFullYear()> NowDay.getFullYear()){
//     if(date.getMonth()>NowDay.getMonth()){
//  if(date.getDate()<NowDay.getDate()){
//   console.log("Car deja envoyer");
//  }else{
//   console.log("Reserver " )
  
//  }
//   }
// }
// }


  
  
 try{
  res.json(Voyage);
 }catch(err){
     res.json({message: err});
 }
 
 });

router.get('/:Ville', async (req, res)=>{
  let i = 0
  try{
    const Voyage = await  Voyages.find({Circulation:req.params.Ville})
    res.json(Voyage[0]);
    
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