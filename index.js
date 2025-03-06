const { default: axios } = require("axios");
const express = require("express");
require("dotenv").config();
const multer = require("multer");
const xlsx = require("xlsx");
const cors = require("cors");
const ValidateLanguage = require("./middlewares/ValidateLanguage");
const Authenticator = require("./middlewares/Authenticator");

const server = express();
server.use(express.json());
server.use(cors());

const AuthRouter = require("./routes/auth.route")
const AttendanceRouter = require("./routes/attendance.route")
server.use("/auth",AuthRouter)
server.use("/attendance",AttendanceRouter)
const storage = multer.memoryStorage();
const upload = multer({ storage });

const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL;


server.get("/", (req, res) => {
  res.send("Hello");
});
server.get("/all-data/:language", ValidateLanguage, async (req, res) => {
  const language = req.params.language;
  try {
    const response = await axios.get(`${BASE_URL}/${language}.json`);
    if (response.data === null) {
      res.status(404).json({ message: "No data present in database" });
    } else {
      let data = Object.entries(response.data).map((ele) => ({
        id: ele[0],
        ...ele[1],
      }));

      res.send(data);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error : Internal server error please try again" });
  }
});
server.get("/get-one/:language/:id",ValidateLanguage,async(req,res)=>{
  const {language,id} = req.params
  try {
    const response = await axios.get(`${BASE_URL}/${language}/${id}.json`)
    if(!response.data){
      return res.status(404).json({message:"Data not found"})
    }else{
      res.json({message:"Request resolved",data:response.data})
    }
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})
server.post("/add-one/:language", ValidateLanguage, async (req, res) => {
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
  } = req.body;
  if (!name || !house_no || !house_owner || !dob) {
    res
      .status(400)
      .json({ message: "Error : Invalid or incomplete data receive" });
  } else {
    try {
      const response = await axios.get(`${BASE_URL}/${language}.json`);
      if (response.status === 200) {
        const singleEntry = {
          house_no,
          house_owner,
          name,
          father_husband_name: father_husband_name || "",
          gender: gender || "",
          cast: cast || "",
          dob: dob,
          occupation: occupation || "",
          shachhar: shachhar || "",
          death_date: death_date || "",
          abhiyukti: abhiyukti || "",
        };
        const data = Object.entries(response.data).map(([id, ele]) => ({
          id,
          ...ele,
        }));
        const isHouseExist = data.filter((ele) => ele.house_no === house_no);
        
        if (isHouseExist[0]) {
          const isDuplicateData = isHouseExist.some(ele=>ele.house_no === house_no && ele.house_owner === house_owner && ele.name === name)
          if(isDuplicateData){
            res
            .status(409)
            .json({
              message: `Data already present in database`,
            });
          }
       else if (isHouseExist[0].house_owner !== house_owner) {
            res
              .status(409)
              .json({
                message: `House no ${house_no} is already associated with house owner`,
                existingHouseOwner : isHouseExist[0].house_owner
              });
          } else {
            //add the data
            try {
              const addResponse = await axios.post(
                `${BASE_URL}/${language}.json`,
                singleEntry
              );
              if (addResponse.status === 200) {
                res.json({
                  message: `${name} added as the new member of house no ${house_no}`,
                });
              } else {
                res
                  .status(addResponse.status)
                  .json({ message: "Faile to add data, please try again." });
              }
            } catch (error) {
              res
                .status(500)
                .json({ message: "Faile to add data, please try again." });
            }
          }
        } else {
          //add new house owner with data
          try {
            const response = await axios.post(
              `${BASE_URL}/${language}.json`,
              singleEntry
            );
            if (response.status === 200) {
              res.json({ message: "Added to the database" });
            } else {
              res.status(500).json({
                message:
                  "Error : Internal server error while adding data to database, please try again",
              });
            }
          } catch (error) {
            res
              .status(500)
              .json({ message: "Internal server error, please try again" });
          }
        }
      } else {
        res
          .status(response.status)
          .json({ message: "Error in database, failed to validate data." });
      }
    } catch (error) {
      res
        .status(error.response.status)
        .json({ message: "Error in database, failed to validate data." });
    }
  }
});
server.post("/upload-excel/:language", ValidateLanguage,Authenticator,upload.single("file"), async (req, res) => {
    if (!req.file) {
      res.status(400).json({ message: "No file uploaded" });
    } else {
      const language = req.params.language;
      try {
        const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        let isInvalid = false;
        const data = xlsx.utils
          .sheet_to_json(sheet, { defval: "" })
          .map((row) => {
            if (!row.house_no || !row.house_owner || !row.name) {
              isInvalid = true;
            }
            return {
              house_no: row.house_no,
              house_owner: row.house_owner,
              name: row.name,
              father_husband_name: row.father_husband_name || "",
              gender: row.gender || "",
              cast: row.cast || "",
              dob: row.dob || "",
              occupation: row.occupation || "",
              shachhar: row.shachhar || "",
              death_date: row.death_date || "",
              abhiyukti: row.abhiyukti || "",
              mobile_no: row.mobile_no || ""
            };
          });
        if (isInvalid) {
          res.status(400).json({
            message:
              "Invalid or incomplete data in excel file, house_no, house_owner and name are reuired queryField",
          });
        } else {
          try {

            const promises = data.map(async (doc) => {
              const id = `UP_BIJNOR_GPDHAMPURA_${doc.house_no}_${doc.dob}`
              const response = await axios.put(
                `${BASE_URL}/${language}/${id}.json`,
                doc
              );
              return response;
            });
            await Promise.all(promises);
            res.status(201).json({ message: "Data added to database", data });
          } catch (error) {
            res
              .status(500)
              .json({ message: "Internal server error, please try again" });
          }
        }
      } catch (error) {
        res.status(500).json({
          message:
            "Internal server error, please try again with a valid excel file",
          error,
        });
      }
    }
  }
);
server.get("/search/:language/:field/", ValidateLanguage, async (req, res) => {
  const language = req.params.language;
  const searchField = req.params.field;
  if (searchField !== "house_no" && searchField !== "house_owner") {
    res.status(500).json({ message: "Invalid searching query" });
  } else {
    const searchValue =
      searchField === "house_no" ? Number(req.query.value) : req.query.value;
    if (!searchValue) {
      res.status(400).json({ message: `Please provide valid ${searchField}` });
    } else {
      try {


        const response = await axios.get(`${BASE_URL}/${language}.json`);
        const data = Object.entries(response.data)
          .map((ele) => ({ id: ele[0], ...ele[1] }))
          .filter((doc) => doc[searchField] === searchValue);
        res.send(data);
      } catch (error) {
        res.status(500).json({
          message:
            "Internal server error while getting the data, please try again.",
        });
      }
    }
  }
});

server.patch("/update-one/:language/:id",ValidateLanguage,async (req, res) => {
    const isEmpty = (obj) => {
      return Object.keys(obj).length === 0;
    };
    const id = req.params.id;
    const language = req.params.language;
    const URL = `${BASE_URL}/${language}/${id}.json`;
    if (isEmpty(req.body)) {
      res.status(400).json({ message: "Request body is empty" });
    } else {
      try {
        const response = await axios.get(URL);
        if (!response.data) {
          res
            .status(404)
            .json({ message: `No data found with the id - ${id}` });
        } else {
          try {
            const updateResponse = await axios.patch(
              URL,
              { ...req.body },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            if (!updateResponse) {
              res
                .status(400)
                .json({
                  message: "Failed to update the data, please try again.",
                });
            } else {
              res.json({
                message: "Data updated",
                update: updateResponse.data,
              });
            }
          } catch (error) {
            res
              .status(500)
              .json({
                message: "Internal server error, while updating the data ",
              });
          }
        }
      } catch (error) {
        res
          .status(500)
          .json({
            message: "Internal server error,while finding data with id ",
          });
      }
    }
  }
);
server.delete("/delete-one/:language/:id", ValidateLanguage,async (req, res) => {
    const id = req.params.id;
    const language = req.params.language;
    const URL = `${BASE_URL}/${language}/${id}.json`;
        try {
          await axios.delete(URL);
          res.json({ message: "Data deleted" });
        } catch (error) {
          res
            .status(500)
            .json({ message: "Internal server error,while deletig data" });
        }
  }
);

server.get("*", (req, res) => {
  res.status(404).json({ message: "404 Not Found, Unknown get request." });
});
server.post("*", (req, res) => {
  res.status(404).json({ message: "404 Not Found, Unknown post request." });
});
server.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
