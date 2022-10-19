const express = require('express');


const router = express.Router();



const Car = require('../Model/car');



router.get('/', async (req, res)=>{
  try{
const care = await Car.find();
res.json(care);
  }catch(err){
    res.json({message: err});
  }
});

router.get('/:Numero', async (req, res)=>{
  let i = 0
  try{
    const care = await  Car.find({Numero_Car:req.params.Numero})
    res.json(care);

    
  }catch(err){
    res.json({message: err});
  }
});


router.post('/',async (req, res)=>{
 const care = new Car({
    car: req.body.car,
    chefeur: req.body.chefeur,
    Numero_Car: req.body.Numero_Car
 });
try{
    const savedCar = await care.save();
    res.json(savedCar);
}catch(err){
    res.json({message: err});
}

});

module.exports = router;