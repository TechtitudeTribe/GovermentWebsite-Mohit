const pool = require("../config/postgres")

async function createAttendanceTable (){
    const query = `CREATE TABLE IF NOT EXISTS attendance (
    id SERIAL PRIMARY KEY,
    attended_by VARCHAR(100) NOT NULL,
    house_no INTEGER NOT NULL,
    house_owner VARCHAR(100) NOT NULL,
    date_time TIMESTAMP NOT NULL
  )`
    await pool.query(query)
}

module.exports = createAttendanceTable