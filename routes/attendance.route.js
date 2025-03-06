const { default: axios } = require("axios");
require("dotenv").config();
const BASE_URL = process.env.BASE_URL;
const AttendanceRouter = require("express").Router();
function getCurrentDateInfo() {
    const today = new Date();
    
    const year = today.getFullYear(); // Get the current year
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Get the current month as a number (0-indexed, so we add 1) and format as two digits
    const date = today.getDate().toString().padStart(2, '0'); // Get the current day of the month and pad it to 2 digits if necessary
    
    return [year.toString(), month, date];
  }
  
  
  
  
AttendanceRouter.post("/", async (req, res) => {
  try {
    const { house_no, house_owner, attended_by,date } = req.body || {};
    if (!house_no || !house_owner || !attended_by)
      return res.status(400).json({ message: "Invalid request body" });
    const curretDate = getCurrentDateInfo()
    await axios.post(`${BASE_URL}/attendance/${curretDate[0]}/${curretDate[1]}/${curretDate[2]}.json`, {
      house_no,
      house_owner,
      attended_by,
      date: date ||Date(),
    });
    return res.json({ message: "Attendance Registered" });
  } catch (error) {
   return res.status(500).json({ message: error.message });
  }
});

module.exports = AttendanceRouter;
