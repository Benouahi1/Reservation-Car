const express = require('express');


const router = express.Router();



const Admin = require('../Model/Admin');



router.get('/:AdminId', async (req, res)=>{
  try{
    const Adminn = await  Admin.find({_id:req.params.AdminId})
    res.json(Adminn);
  }catch(err){
    res.json({message: err});
  }
});


router.post('/',async (req, res)=>{
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