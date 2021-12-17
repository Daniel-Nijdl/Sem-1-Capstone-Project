const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProduct,
  addToCart,
} = require("../controllers/productsCon");

router.route("/").get(getAllProducts);
router.route("/:id").get(getProduct).post(addToCart)

module.exports = router;
