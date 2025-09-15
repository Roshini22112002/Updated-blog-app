const mongoose=require('mongoose')
require('dotenv').config()
const MONGO_URL=process.env.MONGO_URL
const connectDB=async()=>{
    try{
        await mongoose.connect(MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("MONGODB IS CONNECTED")
    }
    catch{
        console.log("MONGODB IS NOT CONNECTED")
        process.exit(1)
    }
}
module.exports=connectDB