const pool = require("../config/postgres");

async function createEnglishDataTable() {
    const query = `
    CREATE TABLE IF NOT EXISTS english_data (
        id TEXT PRIMARY KEY,
        abhiyukti TEXT DEFAULT '',
        "cast" TEXT DEFAULT NULL,
        death_date DATE DEFAULT NULL,
        dob INTEGER NOT NULL, 
        father_husband_name TEXT DEFAULT NULL,
        gender TEXT NOT NULL CHECK (gender IN ('male', 'female')),
        house_no INTEGER NOT NULL,
        house_owner TEXT NOT NULL,
        mobile_no VARCHAR(10) DEFAULT '',
        name TEXT NOT NULL,
        occupation TEXT DEFAULT NULL,
        shachhar TEXT DEFAULT NULL
    );
    `;
    await pool.query(query);
}

module.exports = createEnglishDataTable;
