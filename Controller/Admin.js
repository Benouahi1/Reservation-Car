const express = require('express');


const router = express.Router();



const Admin = require('../Model/Admin');

router.get('/', async (req, res)=>{
  try{
const Adminn = await Admin.find();
res.json(Adminn);
  }catch(err){
    res.json({message: err});
  }
});
router.post('/Login',async(req, res)=>{
  const Admins = new Admin({
    
    GmailAdmin: req.body.GmailAdmin,
    Password: req.body.Password,

 });
    try{ 
     
      const Admins = await  Admin.find({GmailAdmin:req.body.GmailAdmin})
    console.log(req.body.Password);
       const Passworde = req.body.Password;
        if(Passworde==Admins[0].Password){
          console.log("Welcome");
          res.json(Admins );
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




router.post('/Add',async (req, res)=>{
 const admin = new Admin({
    AdminName: req.body.AdminName,
    GmailAdmin: req.body.GmailAdmin,
    Password: req.body.Password
 });
try{
  
    const savedAdmin = await admin.save();
    res.json(savedAdmin);
}catch(err){
    res.json({message: err});
}

});



module.exports = router;