import express from "express";
import Order from "../models/Order.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

// Get User's Orders
router.get("/", protect, async (req, res) => {
  const orders = await Order.find({ user: req.user.id });
  res.json(orders);
});

// Create Order
router.post("/create", protect, async (req, res) => {
  const order = new Order({ user: req.user.id, items: req.body.items, status: "Pending" });
  await order.save();
  res.json({ message: "Order placed", orderId: order._id });
});

// Get Order Details
router.get("/:id", protect, async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
});

// Cancel Order
router.put("/:id/cancel", protect, async (req, res) => {
  await Order.findByIdAndUpdate(req.params.id, { status: "Canceled" });
  res.json({ message: "Order canceled" });
});

export default router;
