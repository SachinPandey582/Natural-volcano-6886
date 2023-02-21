const express = require("express");
const { adminAuthenticate } = require("../Middlewares/adminAuthenticate");
const { ProductModel } = require("../Models/ProductModel");

const ProductsRouter = express.Router();

ProductsRouter.get("/products", async (req, res) => {
  const {
    category,
    min,
    max,
    price,
    search,
    sort,
    order,
    page,
    limit,
    lte,
    gte,
  } = req.query;
  try {
    if (search) {
      console.log(search);
      let allProducts = await ProductModel.find({
        title: { $regex: search, $options: `i` },
      });
      res.send(allProducts);
    } else if (category && gte && page && limit) {
      console.log(gte);
      let data = await ProductModel.find({
        category: category,
        $and: [{ price: { $gte: gte } }],
      })
        .skip(page * limit - limit)
        .limit(limit);

      res.send(data);
    } else if (category && page && limit && lte) {
      let data = await ProductModel.find({
        category: category,
        $and: [{ price: { $lte: lte } }],
      })
        .skip(page * limit - limit)
        .limit(limit);

      res.send(data);
     
    } else if (min && max && category && page && limit) {
      console.log(min, max);
      let products = await ProductModel.find({
        category: category,
        $and: [{ price: { $gte: min } }, { price: { $lte: max } }],
      })
        .skip(page * limit - limit)
        .limit(limit);
      res.send(products);
    } else if (category && order && sort && page && limit) {
      console.log(sort);
      if (order == "desc") {
        let allCatProducts = await ProductModel.find({ category: category })
          .sort({ price: -1 })
          .skip(page * limit - limit)
          .limit(limit);
        res.send(allCatProducts);
      } else {
        let allCatProducts = await ProductModel.find({ category: category })
          .skip(page * limit - limit)
          .limit(limit)
          .sort({ price: 1 });
        res.send(allCatProducts);
      }
    } else if (category && page && limit) {
      let allProducts = await ProductModel.find({ category: category })
        .skip(page * limit - limit)
        .limit(limit);
      res.send(allProducts);
    } else if (page && limit) {
      let allProducts = await ProductModel.find({})
        .skip(page * limit - limit)
        .limit(limit);
      res.send(allProducts);
    } else if (category) {
      let allCatProducts = await ProductModel.find({ category: category });
      res.send(allCatProducts);
    } else if (sort && order) {
      console.log(sort, order);
      if (order == "desc") {
        let products = await ProductModel.find({}).sort({ price: -1 });
        res.send(products);
      } else {
        let products = await ProductModel.find({}).sort({ price: 1 });
        res.send(products);
      }
    } else {
      let allProducts = await ProductModel.find();
      res.send(allProducts);
    }
  } catch (error) {
    res.send({ msg: "Something Went Wrong", error: error });
  }
});

ProductsRouter.post("/products", async (req, res) => {
  try {
    let newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.send({msg:"Product Added Succesfully"})
  } catch (error) {
    res.send({ msg: "Something Went Wrong", error });
  }
});

ProductsRouter.get("/products/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const Product = await ProductModel.find({ _id: productId });
    res.send(Product);
  } catch (error) {
    res.send({ msg: "Something Went Wrong", error });
  }
});

ProductsRouter.delete("/products/:id", adminAuthenticate, async (req, res) => {
  const productId = req.params.id;
  try {
    await ProductModel.findByIdAndDelete(productId);
    res.send({ msg: "Product Deleted Succesfully" });
  } catch (error) {
    res.send({ msg: "Something Went Wrong", error });
  }
});

ProductsRouter.patch("/products/:id", adminAuthenticate, async (req, res) => {
  const productId = req.params.id;
  console.log(req.body, productId);
  try {
    await ProductModel.findByIdAndUpdate(productId, req.body);
    res.send({ msg: "Product Updated Succesfully" });
  } catch (error) {
    res.send({ msg: "Something Went Wrong", error: error });
  }
});

module.exports = { ProductsRouter };
