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