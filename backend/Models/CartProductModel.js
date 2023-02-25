const mongoose=require("mongoose")
const cartProductModelSchema=mongoose.Schema({
    title:{required:true,type:String},
    category:{required:true,type:String},
    img:{required:true,type:String},
    price:{required:true,type:Number},
    quantity:{required:true,type:Number},
    userId:{required:true,type:String},
    

})

const CartProductModel=mongoose.model("cartproduct",cartProductModelSchema)

module.exports={CartProductModel}