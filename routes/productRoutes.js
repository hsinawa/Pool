const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ProductSchema = require("../models/products");
var nodemailer = require("nodemailer");

router.post("/addproduct", async (req, res) => {
  try {
    const docs = await ProductSchema.find({});

    const product = new ProductSchema({
      name: req.body.name,
      image: req.body.image,
      type: req.body.type,
      description: req.body.description,
      price: req.body.price,
      details: req.body.details,
      Category: req.body.category,
    });

    await product.save();

    res.send({ message: "Product Added Successfully" });
  } catch (err) {
    return res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

router.get("/getall", async (req, res) => {
  try {
    const docs = await ProductSchema.find({});

    res.send(docs);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Something Went Wrong" });
  }
});

router.post("/prodbyId", async (req, res) => {
  try {
    const docs = await ProductSchema.findById(req.body.id);

    res.send(docs);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Something Went Wrong" });
  }
});

router.post("/prodbytype", async (req, res) => {
  try {
    const docs = await ProductSchema.find({type:req.body.type});

    res.send(docs);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Something Went Wrong" });
  }
});

router.post("/addreview", async (req, res) => {

  try
  {
    const { data, id } = req.body;

    const product = await ProductSchema.findById({ _id: id });
  
    const reviewmodel = {
      name: data.name,
  
      contact: data.contact,
    };
  
  await  product.quotes.push(reviewmodel);
  await product.save();


  res.send({ message: "Enquiry Submitted Successfully" });
  }
  catch(err){
    return res.status(400).json({ message: `Something Went Wrong  ` });
  }

});

router.post("/delete", async (req, res) => {
  console.log("Del Reached");

  try {
    await ProductSchema.findByIdAndDelete(req.body.id);

    res.send({ message: "Deleted Successfully" });
  } catch (err) {
    return res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

module.exports = router;
