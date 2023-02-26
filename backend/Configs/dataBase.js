const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const connection=mongoose.connect(
  `mongodb+srv://hanumat:hanumat@cluster0.gfxecfo.mongodb.net/craftsvills?retryWrites=true&w=majority`
);

module.exports={connection}
