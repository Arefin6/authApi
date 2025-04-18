// app.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const paymentRoutes = require("./routes/paymentRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/payments", paymentRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

module.exports = app;
