const AuthRouter = require("express").Router();
const Authenticator = require("../middlewares/Authenticator");
const jwt = require("jsonwebtoken");
const { default: axios } = require("axios");
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const BASE_URL = process.env.BASE_URL;
AuthRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res
      .status(400)
      .json({ message: "Please provide valid email and password" });
  } else {
    try {
      const response = await axios.get(`${BASE_URL}/admins.json`);
      const foundAdmin = Object.entries(response.data)
        .map(([id, user]) => ({ id: id, ...user }))
        .filter((user) => user.email === email);
      if (!foundAdmin[0]) {
        res
          .status(404)
          .json({ message: `No admin associated with email -  ${email}` });
      } else {
        if (password !== foundAdmin[0].password) {
          res
            .status(401)
            .json({ message: "Wrong password, please try again." });
        } else {
          try {
            jwt.sign(
              { id: foundAdmin[0].id, email },
              JWT_SECRET_KEY,
              { expiresIn: "30m" },
              (err, token) => {
                if (err) {
                  res
                    .status(500)
                    .json({ message: "Login failed, Internal server error!!" });
                } else {
                  res.json({
                    message: "Login success",
                    isLoggedIn: true,
                    email,
                    token,
                  });
                }
              }
            );
          } catch (error) {
            
            res
              .status(500)
              .json({ message: "Internal server error, please try again" });
          }
        }
      }
    } catch (error) {
        console.log(error)
      res
        .status(500)
        .json({ message: "Internal server error, please try again" });
    }
  }
});
AuthRouter.post("/verify-login", Authenticator, (req, res) => {
  res.json({ message: "Token is active" });
});

module.exports = AuthRouter