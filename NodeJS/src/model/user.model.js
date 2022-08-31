
const bcrypt= require("bcrypt")
const mongoose= require("mongoose")

const userSchema= new mongoose.Schema({
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    mobile:{type:Number,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true},
    status:{type:String,required:true},
    uid:{type:String,required:true}
})

userSchema.pre("save",function(next){
    const hash= bcrypt.hashSync(this.password,8)
    this.password=hash
    return next()
})
userSchema.methods.checkPassword=function(password){
    return bcrypt.compareSync(password,this.password)
}

const User= mongoose.model("user",userSchema)
module.exports=User