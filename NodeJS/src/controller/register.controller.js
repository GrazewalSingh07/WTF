
 const express= require("express")
 const { v4: uuidv4 } = require('uuid');
 const {body, validationResult}=require("express-validator")
const User = require("../model/user.model")
 const router= express.Router()


 router.post("/",body("first_name").not().isEmpty().withMessage("Please enter first name").bail(),body("mobile").not().isEmpty().withMessage("Please enter mobile").bail().isLength(10).withMessage("Mobile number could not exeec 10").bail(),body("role").not().isEmpty().withMessage("Please enter role").bail(),body("status").not().isEmpty().withMessage("Please enter status").bail(),
 body("last_name").not().isEmpty().withMessage("Last name should not be empty").custom((value)=>{
    if(value && value.length<4){
        throw new Error("Last name if entered must be atleast 3 characters")
    }
    return true
   }),

   body("email").not().isEmpty().withMessage("Please enter email").bail().isEmail().withMessage("'Please enter valid email").bail().custom(async(value)=>{
    let user= await User.findOne({email:value}).lean().exec()
    if(user){
       throw new Error("Email already exists")
    }
    return true
    
   }),
    body("password").not().isEmpty().withMessage("Password should not be empty").bail(),body("password").custom((value)=>{
        if(value && value.length<8){
            throw new Error(" Password length is less than 8 characters")
        }
        return true
    }),body("password").custom((value)=>{
       let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
       if(!value.match(regex)){
                   throw new Error("Password must be strong");
               }
            return true;
       
   }),async(req,res)=>{
    try {
        console.log(req.body)
        const errors=validationResult(req)
         
        if(!errors.isEmpty()){
           return res.status(400).json({error:errors.array()})
        }
        req.body.uid=uuidv4()
   
        await User.create(req.body)
        return res.status(200).send("Account Successfully created")
    } catch (error) {
        return res.status(401).send({"Register failed":error.message})
    }
 })
 module.exports=router

 
 