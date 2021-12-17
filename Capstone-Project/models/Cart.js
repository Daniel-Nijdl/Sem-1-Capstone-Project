const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({

  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
