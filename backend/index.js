const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./Configs/dataBase");
const { UserRouter } = require("./Routes/UserRoute");
const { ProductModel } = require("./Models/ProductModel");
const { ProductsRouter } = require("./Routes/ProductsRoute");

app.use(cors());
app.use(express.json());

app.use("/",UserRouter)
app.use("/",ProductsRouter)

app.listen(8080, async () => {
  console.log("Server Is Started At 8080");
  try {
    await connection;
    console.log("Server is Connected To DATABASE");
// ProductModel.insertMany()
//      console.log("updated")
  } catch (error) {
    console.log(error);
  }
});
