import express from "express";
import Product from "../models/Product.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

// Get All Products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get Product by ID
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// Add New Product (Admin Only)
router.post("/", protect, async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({ message: "Product created", product });
});

// Update Product (Admin Only)
router.put("/:id", protect, async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Product updated" });
});

// Delete Product (Admin Only)
router.delete("/:id", protect, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

export default router;
