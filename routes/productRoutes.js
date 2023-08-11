const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ProductSchema = require("../models/products");
router.post("/addproduct", async (req, res) => {

  console.log('Here')
  try {
    const docs = await ProductSchema.find({});

    const product = new ProductSchema({
      name: req.body.name,
      image: req.body.image,
      type: req.body.type,
      description: req.body.description,
      price: req.body.price,
      details: req.body.details,
      category: req.body.category,
    });
   
    await product.save();
    console.log('Added')
    res.send({ message: "Product Added Successfully" });
  } catch (err) {
    console.log('Gone')
    res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

router.get("/getall", async (req, res) => {
  try {
    const docs = await ProductSchema.find({});

    res.send(docs);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something Went Wrong" });
  }
});

module.exports = router;
