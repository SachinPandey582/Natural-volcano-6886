const express=require("express")
const { userAuthentcate } = require("../Middlewares/userAuthenticate")
const { CartProductModel } = require("../Models/CartProductModel")

const CartProductRouter=express.Router()
CartProductRouter.use(userAuthentcate)
/* {
    "_id": "63f4a78cc8307b8710d312b3",
    "title": "Aluminium Showpiece Sun Statue - 7.2*1.2*7.7(Home)  (AS210 A)",
    "category": "Home",
    "img": "https://cdn.plotch.io/image/upload/w_301,h_301/C/V/PLOnceLZpE1673527946_c340a6dbb4d005d04e5dfdc5929dcf99b34dac7491d504b7ab001e9dfe9aa6c9.jpg",
    "price": 154,
    "quantity": 1,
    "__v": 0
  } */


CartProductRouter.post("/cart",async(req,res)=>{
 try {
    let cartProduct=new CartProductModel(req.body)
    await cartProduct.save()
    res.send({msg:"Product Added In Cart Succesfully"})
    
 } catch (error) {
   
    res.send({msg:"Something Went Wrong from backend",error})
 }
   

})
CartProductRouter.get("/cart",async(req,res)=>{
    const {userId}=req.body
    console.log(userId)
    
    try {
        const allCartData=await CartProductModel.find({userId:userId})
       
        res.send(allCartData)
    } catch (error) {
        
        res.send({msg:"Something Went Wrong",error})
    }
})
CartProductRouter.delete("/cart/:id",async(req,res)=>{
   const p_id=req.params.id
    try {
        await CartProductModel.findByIdAndDelete(p_id)
        res.send({msg:"Product Deleted Successfully"})
    } catch (error) {
        
        res.send({msg:"Something Went Wrong",error})
    }
})
CartProductRouter.patch("/cart/:id",async(req,res)=>{
    const p_id=req.params.id
     try {
         await CartProductModel.findByIdAndUpdate(p_id,req.body)
         res.send({msg:"Product Updated  Successfully"})
     } catch (error) {
         
         res.send({msg:"Something Went Wrong",error})
     }
 })
 CartProductRouter.get("/cart/alldelete",async(req,res)=>{
    const {userId}=req.body
    console.log(userId)
    
    try {
       await CartProductModel.deleteMany({userId:userId})
       
       res.send("Cart Is Empty Now")
    } catch (error) {
        
        res.send({msg:"Something Went Wrong",error})
    }
})



module.exports={CartProductRouter}