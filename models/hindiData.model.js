const pool = require("../config/postgres");

async function createHindiDataTable() {
    const query = `
    CREATE TABLE IF NOT EXISTS hindi_data (
        id TEXT PRIMARY KEY, 
        abhiyukti TEXT DEFAULT '',
        "cast" TEXT DEFAULT NULL,
        death_date DATE DEFAULT NULL,
        dob INTEGER NOT NULL,
        father_husband_name TEXT DEFAULT NULL,
        gender TEXT NOT NULL,
        house_no INTEGER NOT NULL,
        house_owner TEXT NOT NULL,
        mobile_no VARCHAR(10) DEFAULT '',
        "name" TEXT NOT NULL,
        occupation TEXT DEFAULT NULL,
        shachhar TEXT DEFAULT NULL
    );
    `;
    await pool.query(query);
}

module.exports = createHindiDataTable;
