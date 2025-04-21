const pool = require("../config/postgres");
async function createPaymentTable() {
  const query = `
  CREATE TABLE IF NOT EXISTS payments_table (
     id SERIAL PRIMARY KEY,
    razorpay_order_id VARCHAR(255) NOT NULL,
    razorpay_payment_id VARCHAR(255),
    razorpay_signature VARCHAR(255),
    amount INTEGER NOT NULL CHECK (amount > 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);
`;
  await pool.query(query);
}

module.exports = createPaymentTable;
