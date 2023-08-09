const mongoose = require("mongoose");

const quotesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
    },
    comment: {
      type: String,
      require: [true, "Tell us what you want to know"],
    },
    rating: {
      type: Number,
      require: [true, "Enter Your Contact Number"],
    },
  },
  {
    timestamps: true,
  }
);

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
    },
    image: {
      type: String,
      require: [true, "Image is required"],
    },
    brand: {
      type: String,
      default: "WADBROS INDIA",
      require: [true, "Image is required"],
    },
    category: {
      type: String,
      require: [true, "Category is required"],
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: [true, "Price is required"],
    },

    details:{
        type: String,
        require: [true, "Write a small detail"],
    } ,
    subCategory:[{
        type: String,
        require: [true, "Write a small detail"],
    } ]
    ,
   
   
    quotes: [quotesSchema],
  },

  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
