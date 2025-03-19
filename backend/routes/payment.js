import express from "express";
import Stripe from "stripe";
import { protect } from "../middlewares/auth.js";
import dotenv from 'dotenv';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

// Checkout Payment
router.post("/checkout", protect, async (req, res) => {
  const { amount, currency } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
  });

  res.json({ clientSecret: paymentIntent.client_secret });
});

export default router;
