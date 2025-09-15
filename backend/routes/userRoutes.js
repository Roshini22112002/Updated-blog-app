const express = require('express');
const router = express.Router();
const jwt=require('jsonwebtoken')
const userData = require('../Models/userData'); 

router.use(express.json());
router.use(express.urlencoded({ extended: true }));


router.post('/reg', async (req, res) => {
   const{userName,email,password,phone}=req.body;
   const user=await userData.findOne({email})
   if(!user)
    return res.send({message:"User not found"})
   if(user.userName !==userName)
    return res.send({message:"Invalid user name"})
   if(user.password===req.body.password){
    const payload={uname:req.body.userName,pwd:req.body.password};
    const token=jwt.sign(payload,"Secret")
    res.send({message:"Login successfull",usertoken:token})
   }
   else
    return res.send({message:"Invalid"})
   if(!phone)
    return res.send({message:"Phone number not available"})
   if(phone.phone !==phone)
    return res.send({message:"Invalid phone number"})
});
module.exports=router