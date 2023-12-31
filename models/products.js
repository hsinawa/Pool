const mongoose = require("mongoose");

const quotesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
    },

    contact: {
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
      require: [true, "Brand is required"],
    },
    type: {
      type: String,
      require: [true, "Type is required"],
    },
    details: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: [true, "Price is required"],
    },

    description: [
      {
        key: {
          type: String,
          require: [true, "Write a Key"],
        },
        value: {
          type: String,
          require: [true, "Write a Value"],
        },
      },
    ],
    Category: {
      type: String,
      require: [true, "Write Category"],
    },
    quotes: [quotesSchema],
  },

  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
