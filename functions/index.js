/* eslint-disable max-len */
const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");
const stripe = require("stripe")("sk_test_51JMAfNL7DaCgtjkMtoF0HRtiA3VmRj7nO7zOCYcD97L95ev5LOo5nmsMBwKRAnWGg0AQrEELBD5v7jwyi6gkFRS100VzncDk4s");
const app = express();

app.use(cors({
  origin: true,
}));

app.use(express.json());

app.get("*", (req, res) => {
  res
      .status(404)
      .send("404, Not Found.");
});

app.post("/payments/create", async (req, res) => {
  try {
    const {amount, shipping} = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      shipping,
      amount,
      currency: "usd",
    });

    res
        .status(200)
        .send(paymentIntent.client_secret);
  } catch (err) {
    res
        .status(500)
        .json({
          statusCode: 500,
          message: err.message,
        });
  }
});


exports.api = functions.https.onRequest(app);
