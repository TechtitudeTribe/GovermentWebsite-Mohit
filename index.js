
const express = require("express");
require("dotenv").config();

const cors = require("cors");

const pool = require("./config/postgres");

const server = express();
server.use(express.json());
server.use(cors());

const AuthRouter = require("./routes/auth.route")
const AttendanceRouter = require("./routes/attendance.route");
const DataRouter = require("./routes/data.route")
const createAttendanceTable = require("./models/attendance.model");
const createAdminTable = require("./models/admin.model");
const createEnglishDataTable = require("./models/englishData.model");
const createHindiDataTable = require("./models/hindiData.model");
const createPaymentTable = require("./models/payments.model")
server.use("/auth",AuthRouter)
server.use("/attendance",AttendanceRouter)
server.use('/data',DataRouter)


const PORT = process.env.PORT || 3000;



server.get("/", (req, res) => {
  res.send("Hello");
});
server.get("*", (req, res) => {
  res.status(404).json({ message: "404 Not Found, Unknown get request." });
});
server.post("*", (req, res) => {
  res.status(404).json({ message: "404 Not Found, Unknown post request." });
});
server.listen(PORT, async() =>{ 
  
  console.log(`Server running on Port ${PORT}`)
try {
  await pool.connect()
  await createAttendanceTable()
  await createAdminTable()
  await createHindiDataTable()
  await createEnglishDataTable()
  await createPaymentTable()
  console.log('PostgreSQL Connected')
} catch (error) {
  console.log(error)
  console.log("Failed to connect to PostgreSQL")
}
});
