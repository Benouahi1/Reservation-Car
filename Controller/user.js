const express = require('express');
const router = express.Router();
const User = require('../Model/user');






router.get('/', async (req, res)=>{
  try{
const user = await User.find();
res.json(user);
  }catch(err){
    res.json({message: err});
  }
});





router.post('/Register',async (req, res)=>{

// const validation = joi.validate(req.body, Schema);
// res.send(validation);

 const user = new User({
    UserName: req.body.UserName,
    Gmail: req.body.Gmail,
    Password: req.body.Password,

 });
try{

  let Email = 0;
  const user1 = await User.find();
  user1.forEach(Element => {
   
  if(Element.Gmail === req.body.Gmail){
    Email = Email + 1;
    
  }else{
    Email = Email+ 0;
  }
});
if(Email == 0){
  const savedUser = await user.save();
  res.json(savedUser);
}else{
  console.log("Gmail deja ");
}
   
}catch(err){
    res.json({message: err});
}

});

router.post('/Login',async(req, res)=>{
  const users = new User({
    
    Gmail: req.body.Gmail,
    Password: req.body.Password,

 });
    try{ 
     
      const usere = await  User.find({Gmail:req.body.Gmail})
    console.log(req.body.Password);
       const Passworde = req.body.Password;
        if(Passworde==usere[0].Password){
          
          console.log("Welcome");
          res.json(usere);
         
          }else{
            console.log("Password erour");
          }
      
}catch(err){
    res.json({message: err});
    console.log("Gmail not de fiend");
}

});

router.delete('/:UserId', async (req, res)=>{
  
  try{
   const removeUser = await User.remove({_id:req.params.UserId});
    res.json(removeUser)
  }catch(err){
    res.json({message: err});
   
  }


})




module.exports = router;