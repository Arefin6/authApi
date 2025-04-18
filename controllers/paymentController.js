// controllers/paymentController.js
const stripe = require("stripe")(process.env.STRIPE_Api_KEY);
const Payment = require("../models/Payment");

exports.checkout = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ msg: "Invalid amount" });
    }

    // Simulate a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe works in cents
      currency: "usd",
      metadata: { userId: req.user.id },
    });

    // Store transaction in DB
    const payment = new Payment({
      userId: req.user.id,
      amount,
      currency: "usd",
      status: paymentIntent.status,
      paymentIntentId: paymentIntent.id,
    });

    await payment.save();

    res.status(201).json({
      msg: "Payment processed successfully",
      paymentIntent: {
        id: paymentIntent.id,
        client_secret: paymentIntent.client_secret,
        status: paymentIntent.status,
      },
    });
  } catch (err) {
    res.status(500).json({ msg: "Payment failed", error: err.message });
  }
};
