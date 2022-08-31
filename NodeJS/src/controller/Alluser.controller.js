const express= require("express");
 
const User = require("../model/user.model");
const router= express.Router()

router.get("/", async(req,res)=>{
    console.log(req.user)
    try {
        const user= await User.find({},{"first_name":1,"email":1,"mobile":1,"status":1,"role":1,"_id":0}).lean().exec();
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})
 

module.exports= router