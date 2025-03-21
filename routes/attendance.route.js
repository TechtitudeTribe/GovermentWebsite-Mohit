require("dotenv").config();
const AttendanceRouter = require("express").Router();
const pool = require("../config/postgres");
AttendanceRouter.get("/", async (req, res) => {
  try {
    const { start, end, date, house_no } = req.query;
    if ((!start || !end) && !date)
      return res.status(400).json({ message: "Invalid query" });
    let query = `SELECT 
      attended_by,
      house_no,
      house_owner,
      TO_CHAR(date_time, 'YYYY-MM-DD') AS date,
      TO_CHAR(date_time, 'HH12:MI:SS AM') AS time --add/remove 'AM' after SS for AM/PM
      FROM attendance`;
    if (start && end)
      query += ` WHERE date_time >= '${start}' AND date_time < '${end}'`;
    else if (date) query += ` WHERE DATE(date_time) = '${date}'`;
    if (house_no) query += ` AND house_no = ${house_no} ;`;
    const response = await pool.query(query);
    if (response.rowCount === 0)
      return res
        .status(404)
        .json({ message: "No data found with provided date or house_no" });
    else return res.json(response.rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

AttendanceRouter.post("/", async (req, res) => {
  try {
    const { attended_by, house_no, house_owner, date_time } = req.body;
    if (!attended_by || !house_no || !house_owner || !date_time)
      return res.status(400).json({ message: "Invalid request body" });
    let query = `INSERT INTO attendance (attended_by,house_no,house_owner,date_time) VALUES ($1, $2, $3, $4)`;
    const response = await pool.query(query, [
      attended_by,
      house_no,
      house_owner,
      date_time,
    ]);
    return res.json({
      message: `Attendance added for house_no ${house_no} by ${attended_by}`,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
module.exports = AttendanceRouter;
