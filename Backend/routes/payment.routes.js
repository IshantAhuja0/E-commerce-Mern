// payment.routes.js
import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe"; 

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); 

const router = express.Router();

router.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert ₹ to paise
      currency: "inr",
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(500).json({ error: "Payment failed" });
  }
});

export default router;
