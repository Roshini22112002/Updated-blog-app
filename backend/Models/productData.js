const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    productTitle:String,
    productDescription:String,
    Status:String,
    imageUrl:String
},{ collection: 'products' });
module.exports=mongoose.model('products',productSchema)