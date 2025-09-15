const express=require('express')
const router=express.Router()
const jwt = require('jsonwebtoken');
const productData=require('../Models/productData')

router.use(express.json())
router.use(express.urlencoded({extended:true}))
function verifyToken(req,res,next){
    let token=req.headers.token;
    try{
        if(!token) throw 'Unauthorized Access'
        let payload=jwt.verify(token,"Secret")
        if(!payload) throw 'Unauthorized Access'
        next()

    }
    catch(err){
        res.json({message:err})
    }
}
router.get('/',async(req,res)=>{
    const products=await productData.find()
    res.json({products})
})
router.post('/add',verifyToken,async(req,res)=>{
    const newProduct = new productData(req.body);
    const savedProduct = await newProduct.save();
    console.log(savedProduct)
    res.json({savedProduct});
})
   
router.put('/update/:id',verifyToken,async(req,res)=>{
    const id=req.params.id;
    const updateData=req.body;
    const updatedProduct=await productData.findByIdAndUpdate(id,updateData,{new:true,runValidators:true})
    res.json({updatedProduct});
})
    router.delete('/delete/:id',verifyToken, async (req, res) => {
        const deletedProduct = await productData.findByIdAndDelete(req.params.id);
        if (!deletedProduct) 
            return res.json({ message: "Product not found" });
        res.json({ message: "Product deleted successfully" });
})
module.exports=router