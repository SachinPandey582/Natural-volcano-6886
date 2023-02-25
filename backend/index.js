const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./Configs/dataBase");
const { UserRouter } = require("./Routes/UserRoute");
const { ProductModel } = require("./Models/ProductModel");
const { ProductsRouter } = require("./Routes/ProductsRoute");
const { CartProductRouter } = require("./Routes/CartRoute");
const { userAuthentcate } = require("./Middlewares/userAuthenticate");

app.use(cors());
app.use(express.json());

app.use("/",UserRouter)
app.use("/",ProductsRouter)
app.use("/",CartProductRouter)

app.listen(8080, async () => {
  console.log("Server Is Started At 8080");
  try {
    await connection;
    console.log("Server is Connected To DATABASE");
  } catch (error) {
    console.log(error);
  }
});
