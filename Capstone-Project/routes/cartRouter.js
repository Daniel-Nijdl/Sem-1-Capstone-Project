const express = require("express");
const router = express.Router();

const {
  // createCart,
  getCart,
} = require("../controllers/cartCon");


// router.route("/").post(createCart)
router.route("/:id").get(getCart);

module.exports = router;