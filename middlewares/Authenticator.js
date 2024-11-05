const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const Authenticator = (req, res, next) => {
  
  const token = req.headers.authorization?.split(" ")[1] || null;
  
  if (!token) {
    res.status(401).json({ message: "Please login first" });
  } else {
    jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ message: 'Token has expired, please login again.' });
        } else if (err.name === 'JsonWebTokenError') {
          return res.status(401).json({ message: 'Invalid token, please login first.'});
        } else if (err.name === 'NotBeforeError') {
          return res.status(401).json({ message: 'Token not active.' });
        } else {
          return res.status(500).json({ message: 'Failed to authenticate token.' });
        }
      } else {
        next();
      }
    });
  }
};

module.exports = Authenticator;
