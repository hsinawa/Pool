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
      comment: req.body.comment,
    });

    await enq.save();

    res.send({ message: "Message Sent Successfully" });
  } catch (err) {
    res.status(400).json({ message: `Something Went Wrong ${err} ` });
  }
});

module.exports = router;
