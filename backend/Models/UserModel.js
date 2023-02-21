const mongoose = require("mongoose");

const userModelSchema = mongoose.Schema({
  name: { required: true, type: String },
  email: { required: true, type: String },
  password: { required: true, type: String },
  role:{required:true,type:String}
  
});
const UserModel=mongoose.model("user",userModelSchema)

module.exports={UserModel}

