const DataRouter = require("express").Router();
const ValidateLanguage = require("../middlewares/ValidateLanguage");
const Authenticator = require("../middlewares/Authenticator");
const pool = require("../config/postgres");
const multer = require("multer");
const xlsx = require("xlsx");

const storage = multer.memoryStorage();
const upload = multer({ storage });

DataRouter.get(
  "/:language/get-all",
  ValidateLanguage,
  Authenticator,
  async (req, res) => {
    const { language } = req.params;
    try {
      const query = `SELECT * FROM ${language}_data`;
      const response = await pool.query(query);
      if (response.rowCount === 0) {
        return res.status(404).json({ message: "No data present in database" });
      } else {
        return res.send(response.rows);
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
);

DataRouter.get(
  "/:language/get-one/:id",
  ValidateLanguage,
  Authenticator,
  async (req, res) => {
    const { language, id } = req.params;
    try {
      const query = `SELECT * FROM ${language}_data WHERE id = $1`;
      const response = await pool.query(query, [id]);
      if (response.rowCount === 0) {
        return res.status(404).json({ message: "Data not found" });
      } else {
        return res.json({ message: "Request resolved", data: response.rows[0] });
      }
    } catch (error) {
      return  res.status(500).json({ message: error.message });
    }
  }
);

DataRouter.post(
  "/:language/add-one",
  ValidateLanguage,
  Authenticator,
  async (req, res) => {
    const language = req.params.language;
    const {
      house_no,
      house_owner,
      name,
      father_husband_name,
      gender,
      cast,
      dob,
      occupation,
      shachhar,
      death_date,
      abhiyukti,
      mobile_no,
    } = req.body;
    if (!name || !house_no || !house_owner || !dob) {
      return res
        .status(400)
        .json({ message: "Invalid or incomplete data receive" });
    } else {
      try {
        const query = `SELECT * FROM ${language}_data WHERE house_no = $1`;
        const isHouseExist = await pool.query(query, [house_no]);
        if (isHouseExist.rowCount > 0) {
          const isDuplicateData = isHouseExist.rows.some(
            (ele) =>
              ele.house_no === house_no &&
              ele.house_owner === house_owner &&
              ele.name === name &&
              ele.dob === dob
          );
          if (isDuplicateData) {
            return res.status(409).json({
              message: `Data already present in database`,
            });
          } else if (isHouseExist.rows[0].house_owner !== house_owner) {
            return res.status(409).json({
              message: `House no ${house_no} is already associated with house owner ${isHouseExist.rows[0].house_owner}`,
              existingHouseOwner: isHouseExist.rows[0].house_owner,
            });
          }
        }
        try {
          const query = `INSERT INTO ${language}_data
         (id, house_no, house_owner,  name, father_husband_name, gender, "cast", dob, occupation, shachhar, death_date, abhiyukti, mobile_no) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;
          await pool.query(query, [
            `UP_BIJNOR_GPDHAMPURA_${house_no}_${dob}`,
            house_no,
            house_owner,
            name,
            father_husband_name,
            gender,
            cast,
            dob,
            occupation,
            shachhar,
            death_date || null,
            abhiyukti,
            mobile_no,
          ]);
          return res.json({
            message: `${name} added to house no ${house_no}`,
          });
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }
  }
);

function validateRow(row, index) {
  const REQUIRED_FIELDS = ["dob", "gender", "house_no", "house_owner", "name"];
  let missingFields = [];
  REQUIRED_FIELDS.forEach((field) => {
    if (!row[field] || row[field].toString().trim() === "") {
      missingFields.push(field);
    }
  });
  return missingFields.length > 0 ? { index: index + 1, missingFields } : null;
}
DataRouter.post(
  "/:language/upload-excel",
  ValidateLanguage,
  Authenticator,
  upload.single("file"),
  async (req, res) => {
    if (!req.file) {
      return  res.status(400).json({ message: "No file uploaded" });
    } else {
      const language = req.params.language;
      try {
        const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
        const sheetName = workbook.SheetNames[0];
        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

        if (data.length === 0) {
          return res.status(400).json({ message: "Excel file is empty" });
        }

        let invalidRows = [];
        let processedData = [];

        // Validate each row and generate ID
        data.forEach((row, index) => {
          const validationError = validateRow(row, index);
          if (validationError) {
            invalidRows.push(validationError);
          } else {
            const id = `UP_BIJNOR_GPDHAMPURA_${row.house_no}_${row.dob}`;
            processedData.push({
              id,
              ...row,
            });
          }
        });

        if (invalidRows.length > 0) {
          return res.status(400).json({
            message: "Some rows have missing required fields",
            invalidRows,
          });
        }

        // Check for duplicates in the database
        const existingIds = new Set();
        const idList = processedData.map((row) => row.id);

        const { rows: existingRecords } = await pool.query(
          `SELECT id FROM ${language}_data WHERE id = ANY($1)`,
          [idList]
        );

        existingRecords.forEach((record) => existingIds.add(record.id));

        const newEntries = processedData.filter(
          (row) => !existingIds.has(row.id)
        );

        if (newEntries.length === 0) {
          return res.status(400).json({
            message: "All records already exist in the database",
            duplicateIds: [...existingIds],
          });
        }

        // Insert valid and unique data into the database
        const insertQuery = `
            INSERT INTO ${language}_data (id, abhiyukti, "cast", death_date, dob, father_husband_name, gender, house_no, house_owner, mobile_no, name, occupation, shachhar)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        `;

        const client = await pool.connect();
        try {
          await client.query("BEGIN");

          for (let row of newEntries) {
            await client.query(insertQuery, [
              row.id,
              row.abhiyukti || "",
              row.cast || null,
              row.death_date || null,
              row.dob,
              row.father_husband_name || null,
              row.gender,
              row.house_no,
              row.house_owner,
              row.mobile_no || "",
              row.name,
              row.occupation || null,
              row.shachhar || null,
            ]);
          }

          await client.query("COMMIT");
          return res.status(200).json({
            message: "File processed successfully",
            insertedRows: newEntries.length,
            duplicateRows: existingIds.size,
          });
        } catch (error) {
          await client.query("ROLLBACK");
          return res.status(500).json({ message: error.message });
        } finally {
          client.release();
        }
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }
  }
);

DataRouter.get("/:language/search", ValidateLanguage, async (req, res) => {
  const { language } = req.params;
  const { field, value } = req.query;
  if ((field !== "house_no" && field !== "house_owner") || !value) {
    return res.status(500).json({ message: "Invalid searching query" });
  } else {
    const searchValue = field === "house_no" ? Number(value) : String(value);
    if (!searchValue)
      return res.status(400).json({ message: "Invalid Searching query" });
    try {
      const query = `SELECT * FROM ${language}_data WHERE ${field} = $1`;

      const response = await pool.query(query, [searchValue]);
      if (response.rowCount === 0)
        return res.status(404).json({
          message: `No data found associated with ${field} ${searchValue}`,
        });
      else return res.json({ data: response.rows });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
});

DataRouter.patch(
  "/:language/update-one/:id",
  ValidateLanguage,
  Authenticator,
  async (req, res) => {
    const { id, language } = req.params;
    const updates = req.body;

    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    if (Object.keys(updates).length === 0) {
      return res
        .status(400)
        .json({ message: "At least one field is required to update" });
    }

    try {
      // Generate dynamic SET clause
      const setClauses = [];
      const values = [];
      let index = 1;

      for (let key in updates) {
        setClauses.push(`"${key}" = $${index}`);
        values.push(updates[key]);
        index++;
      }

      values.push(id); // Add ID as the last value

      const updateQuery = `
          UPDATE ${language}_data 
          SET ${setClauses.join(", ")}
          WHERE id = $${index}
          RETURNING *;
      `;

      const { rows } = await pool.query(updateQuery, values);

      if (rows.length === 0) {
        return res.status(404).json({ message: "Record not found" });
      }

      return res
        .status(200)
        .json({ message: "Record updated successfully", updatedRow: rows[0] });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
);

DataRouter.delete("/delete/:id", Authenticator, async (req, res) => {
  const { id } = req.params;

  try {
    const { rowCount } = await pool.query(
      "DELETE FROM hindi_data WHERE id = $1",
      [id]
    );

    if (rowCount === 0) {
      return res.status(404).json({ message: "Record not found" });
    }

    return res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

DataRouter.delete(
  "/delete-by-house/:house_no",
  Authenticator,
  async (req, res) => {
    const { house_no } = req.params;

    try {
      const { rowCount } = await pool.query(
        "DELETE FROM english_data WHERE house_no = $1",
        [house_no]
      );

      if (rowCount === 0) {
        return res
          .status(404)
          .json({ message: "No records found for this house number" });
      }

      return res
        .status(200)
        .json({ message: `Deleted ${rowCount} record(s) successfully` });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
);

DataRouter.get(
  "/:language/all-house-owners",
  ValidateLanguage,
  async (req, res) => {
    try {
      const { language } = req.params;
      const query = `SELECT * FROM ${language}_data WHERE name = house_owner`;
      const response = await pool.query(query);
      if (response.rowCount === 0)
        return res.status(404).json({ message: "No data found" });
      else return res.json({ data: response.rows });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
);

module.exports = DataRouter;
