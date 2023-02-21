const mongoose = require("mongoose");

const connection=mongoose.connect(
  `mongodb+srv://hanumat:hanumat@cluster0.gfxecfo.mongodb.net/craftsvills?retryWrites=true&w=majority`
);

module.exports={connection}
