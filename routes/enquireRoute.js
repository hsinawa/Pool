const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const EnquireSchema = require("../models/contactModel");

router.post("/postEnq", async (req, res) => {
  try {
    const docs = await EnquireSchema.find({});

    const enq = new EnquireSchema({
      name: req.body.name,
      contact: req.body.number,
      comment: req.body.message,
    });

    await enq.save();

    res.send({ message: "Message Sent Successfully" });
  } catch (err) {
    res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

router.get("/getall", async (req, res) => {
  try {
    const docs = await EnquireSchema.find({});

    res.send(docs);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something Went Wrong" });
  }
});

module.exports = router;
