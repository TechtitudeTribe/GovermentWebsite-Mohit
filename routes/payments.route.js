const PaymentsRouter = require("express").Router();
const Razorpay = require("razorpay");
const pool = require("../config/postgres");
require("dotenv").config();
const crypto = require("crypto");
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

PaymentsRouter.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: 10 * 100,
      currency: "INR",
      receipt: `receipt#${Date.now()}`,
    };
    const order = await razorpay.orders.create(options);

    const query = `INSET INTO payments_table (razorpay_order_id, amount) VALUES ($1, $2)`;
    const result = await pool.query(query, [order.id, options.amount]);

    return res.json({ order, paymentId: result.rows[0].id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

PaymentsRouter.post("/verify-payment", async (req, res) => {
  const { razorpay_order_id, razorpay_payments_id, razorpay_signature } =
    req.body;
  if (!razorpay_order_id || !razorpay_payments_id || !razorpay_signature) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    hmac.update(`${razorpay_order_id}|${razorpay_payments_id}`);
    const generated_signature = hmac.digest("hex");
    if (generated_signature === razorpay_signature) {
      const query = `UPDATE payments_table SET razorpay_payment_id = $1, razorpay_signature = $2 WHERE razorpay_order_id = $3`;
      await pool.query(query, [
        razorpay_payments_id,
        razorpay_signature,
        razorpay_order_id,
      ]);
      return res.json({ message: "Payment verified." });
    } else {
      return res.status(400).json({ message: "Invalid Payment" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
