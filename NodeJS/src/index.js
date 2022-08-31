const express= require("express")
const cors= require("cors")
const app= express()
app.use(express.json())

app.use(cors())


 const register= require("./controller/register.controller")
 const login= require("./controller/login.controller")
const user=require("./controller/User.controller")
const allusers= require("./controller/Alluser.controller")
app.use("/register",register)
app.use("/login",login)
app.use("/user",user)
app.use("/allusers",allusers)


module.exports= app