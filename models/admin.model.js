const pool = require("../config/postgres");
async function createAdminTable() {
  const query = `CREATE TABLE IF NOT EXISTS admin (
        email VARCHAR(255) PRIMARY KEY NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
        )`;
  await pool.query(query);
}
module.exports = createAdminTable;