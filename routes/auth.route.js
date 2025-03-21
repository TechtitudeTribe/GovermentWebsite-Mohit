const AuthRouter = require("express").Router();
const Authenticator = require("../middlewares/Authenticator");
const jwt = require("jsonwebtoken");
const pool = require("../config/postgres");
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

AuthRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide valid email and password" });
  } else {
    try {
      const query = `
      SELECT email, password
      FROM admin
      WHERE email = $1;
  `;
      const response = await pool.query(query, [email]);
      if (response.rowCount < 1) {
        return res
          .status(404)
          .json({ message: `No admin associated with email -  ${email}` });
      } else {
        if (password !== response.rows[0].password) {
          return res
            .status(401)
            .json({ message: "Wrong password, please try again." });
        } else {
          try {
            jwt.sign(
              { email, date: Date.now() },
              JWT_SECRET_KEY,
              { expiresIn: "30m" },
              (err, token) => {
                if (err) {
                  return res
                    .status(500)
                    .json({ message: "Login failed, Internal server error!!" });
                } else {
                  return res.json({
                    message: "Login success",
                    isLoggedIn: true,
                    email,
                    token,
                  });
                }
              }
            );
          } catch (error) {
            return res.status(500).json({ message: error.message });
          }
        }
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
});
AuthRouter.post("/verify-login", Authenticator, (req, res) => {
  return res.json({ message: "Token is active" });
});

module.exports = AuthRouter;
