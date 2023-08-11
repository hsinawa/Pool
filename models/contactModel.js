const mongoose = require("mongoose");

const EnquireSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"],
  
      },
      comment: {
        type: String,
        require: [true, "Tell us what you want to know"],
      },
      contact: {
        type: Number,
        require: [true, "Enter Your Contact Number"],
       
      }
},{timestamps:true})


const Enquire = mongoose.model("Enquire", EnquireSchema);

module.exports = Enquire;
