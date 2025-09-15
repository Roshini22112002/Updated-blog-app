const mongoose=require('mongoose')
const userData=new mongoose.Schema({
    userName:String,
    email:String,
    password:String,
    phone:Number
})
module.exports=mongoose.model('users',userData)