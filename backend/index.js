const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./Configs/dataBase");
const { UserRouter } = require("./Routes/UserRoute");

app.use(cors());
app.use(express.json());

app.use("/",UserRouter)

app.listen(8080, async () => {
  console.log("Server Is Started At 8080");
  try {
    await connection;
    console.log("Server is Connected To DATABASE");
  } catch (error) {
    console.log(error);
  }
});
