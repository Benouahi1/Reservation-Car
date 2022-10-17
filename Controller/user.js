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
if(Email = 0){
  const savedUser = await user.save();
  res.json(savedUser);
}else{
  console.log("Gmail deja ");
}
   
}catch(err){
    res.json({message: err});
}

});

router.get('/:Gmail/:Passworde',async(req, res)=>{
    
    try{ 
    const user = await  User.find({Gmail:req.params.Gmail})
        res.json(user);
     
       const Passworde = req.params.Passworde;
        if(Passworde==user[0].Password){
          console.log("Welcome");
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