const mongoose = require("mongoose");
const { BadRequest, NotFound } = require("../errors");

const Cart = require("../models/Cart");

// const createCart = async (req, res) => {
//   const cart = await Cart.create(req.body);
//   res.json({ cart })
// }

const getCart = async (req, res) => {
  const { id } = req.params;

  const cart = await Cart.findById({ _id: id })

  res.json({ cart })
}

module.exports = { getCart }