const express= require("express");
 
const authenticate=require("../middleware/authenticate");
const User = require("../model/user.model");
const router= express.Router()

router.get("/", authenticate,async(req,res)=>{
    console.log(req.user)
    try {
        const user= await User.findOne({uid:req.user.uid}).lean().exec();
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})
 

module.exports= router