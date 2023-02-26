const mongoose=require("mongoose")

const productModelSchema=mongoose.Schema({
    title:{required:true,type:String},
    category:{required:true,type:String},
    img:{required:true,type:String},
    price:{required:true,type:Number},
    quantity:{required:true,type:Number},
    des:{type:Number}
})

const ProductModel=mongoose.model("product",productModelSchema)

module.exports={ProductModel}