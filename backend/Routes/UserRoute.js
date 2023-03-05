const express = require("express");
const jswt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../Models/UserModel");
const { adminAuthenticate } = require("../Middlewares/adminAuthenticate");

const UserRouter = express.Router();

UserRouter.get("/users", adminAuthenticate, async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.send(allUsers);
  } catch (error) {
    res.send({ msg: "Something Went Wrong", error });
  }
});
UserRouter.get("/user/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const User = await UserModel.find({ _id: userId });
    res.send(User);
  } catch (error) {
    res.send({ msg: "Something Went Wrong", error });
  }
});

UserRouter.post("/user/signup", async (req, res) => {
  const { email, password, name, role } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      res.send({
        msg: "User Already Exist Please Login in Your Existing Account",
      });
    } else {
      bcrypt.hash(password, 5, async (error, hash) => {
        if (error) res.send({ msg: "Something Went Wrong" });
        let newUser = new UserModel({ name, email, password: hash, role });
        await newUser.save();

        const user = await UserModel.find({ email });

        const token = jswt.sign({ user: user[0] }, "hanumat");
        res.send({
          msg: "User Registered Succesfully",
          token: token,
          name,
          email,
        });
      });
    }
  } catch (error) {
    res.send({ msg: "Something Went Wrong", error });
  }
});

UserRouter.post("/user/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, async (error, result) => {
        if (error) res.send({ msg: "Password Is Not Correct" });
        if (result == true) {
          const token = jswt.sign({ user: user[0] }, "hanumat");
          res.send({
            msg: `Welcome Back ${user[0].name}`,
            token: token,
            name: user[0].name,
            email: user[0].email,
          });
        }
      });
    } else {
      res.send({ msg: "Account Not Exist" });
    }
  } catch (error) {
    res.send({ msg: "Something Went Wrong", error });
  }
});

UserRouter.delete("/user/delete/:id", adminAuthenticate, async (req, res) => {
  const userId = req.params.id;
  try {
    await UserModel.findByIdAndDelete(userId);
    res.send({ msg: "User Deleted Succesfully" });
  } catch (error) {
    res.send({ msg: "Something Went Wrong", error });
  }
});

UserRouter.patch("/user/update/:id", adminAuthenticate, async (req, res) => {
  const userId = req.params.id;
  console.log(req.body, userId);
  try {
    await UserModel.findByIdAndUpdate(userId, req.body);
    res.send({ msg: "User Updated Succesfully" });
  } catch (error) {
    res.send({ msg: "Something Went Wrong", error: error });
  }
});
module.exports = { UserRouter };
