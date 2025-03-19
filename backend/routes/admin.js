import express from "express";
import User from "../models/User.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

// Get All Users (Admin Only)
router.get("/users", protect, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

// Delete User (Admin Only)
router.delete("/users/:id", protect, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

export default router;
