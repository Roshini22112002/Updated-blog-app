const express=require('express')
const connectDB=require('./connection')
require('dotenv').config()
const cors=require('cors')
const app=express()
const port=process.env.port
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB()
const productRoute=require('./routes/productRoutes')
app.use('/products',productRoute)
const userRoute=require('./routes/userRoutes')
app.use('/user',userRoute)
const productData=require('./Models/productData')
const userData=require('./Models/userData')

app.listen(port,()=>{
    console.log(`The app is listening at ${port}`)
})