const jswt = require("jsonwebtoken");
const userAuthentcate = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token)
    if (token) {
      jswt.verify(token, "hanumat", async (error, decoded) => {
        if (decoded) {
          console.log(decoded)
          
          req.body.userId = decoded.user._id;
          console.log(decoded.user._id);
          next();
        }
        if (error) res.send({ msg: "Something Went Wrong" });
      });
    } else {
      res.send({
        msg: "Your Are Not Logined Please login To Add Product In Cart",
      });
    }
  } catch (error) {
    res.send({ msg: "Something Went Wrong" });
  }
};
module.exports = { userAuthentcate };
