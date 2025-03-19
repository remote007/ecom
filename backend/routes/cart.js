import express from "express";
import { protect } from "../middlewares/auth.js";
import Cart from "../models/Cart.js";

const router = express.Router();

// Get User's Cart
router.get("/", protect, async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id }).populate("items.productId");
  res.json(cart ? cart.items : []);
});

// Add Product to Cart
router.post("/add", protect, async (req, res) => {
  let cart = await Cart.findOne({ user: req.user.id });

  if (!cart) {
    cart = new Cart({ user: req.user.id, items: [] });
  }

  cart.items.push(req.body);
  await cart.save();
  res.json({ message: "Product added to cart" });
});

// Remove Product from Cart
router.delete("/remove", protect, async (req, res) => {
  await Cart.updateOne({ user: req.user.id }, { $pull: { items: { productId: req.body.productId } } });
  res.json({ message: "Product removed from cart" });
});

export default router;
