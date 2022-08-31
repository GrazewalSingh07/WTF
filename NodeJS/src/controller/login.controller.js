 
 const express= require("express")
 
const {body, validationResult}=require("express-validator")
const User = require("../model/user.model")


const router=express.Router()
 

const jwt = require('jsonwebtoken');
require("dotenv").config()
 
const newToken=(user)=>{
    return jwt.sign({user},process.env.SECRET_KEY,{ expiresIn:"720h" })
}


router.post("/",body("email").not().isEmpty().withMessage("Please enter email").isEmail().withMessage("Please enter a valid email")
.custom(async(value)=>{
   let user= await User.findOne({email:value}).lean().exec()
   if(!user){
       throw new Error("Email does not existes, Please register")
   }
   return true
}),
body("password").not().isEmpty().withMessage("Please enter password"), async(req,res)=>{
     
    try {

        const errors=validationResult(req)
         
        if(!errors.isEmpty()){
           return res.status(400).json({error:errors.array()})
        }

       let user= await User.findOne({email:req.body.email}).exec()
        if(user.role!==req.body.role){
             throw new Error("This does not belong to you")
        }

       const match=user.checkPassword(req.body.password)
       
       if(!match){
           return  res.status(400).send("Email or password incorrect")
       }
       
       const token=newToken(user)
       return res.status(200).send({"message":"Logged in successfully","data":user,"token":{token,"uid":user.uid,"email":user.email}})
    } catch (error) {
        return res.status(401).send({"Login failed":error.message})
    }
})

module.exports= router