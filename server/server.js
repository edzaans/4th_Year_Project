const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "Edgars",
  host: "localhost",
  password: "admin",
  database: "react_test",
});

app.listen("3001", () => {
  console.log("App deployed on 3001");
});

app.get("/test", (req, res) => {
  res.send("Test OK!!!!!!!!");
});

// *******Post Employee DATA to database******
app.post("/register", (req, res) => {
  const name = req.body.name;
  const lname = req.body.lname;
  const email = req.body.email;
  const location = req.body.location;
  const licence_cat = req.body.licence_cat;
  const qualifications = req.body.qualifications;
  const penalty_points = req.body.penalty_points;
  const experience_years = req.body.experience_years;
  const work_type = req.body.work_type;
  const available = req.body.available;

  db.query(
    "INSERT INTO users(first_name,last_name,email,location,licence_cat,qualifications,penalty_points,experience_years,work_type,available,register_date) VALUES (?,?,?,?,?,?,?,?,?,?,now())",
    [
      name,
      lname,
      email,
      location,
      licence_cat,
      qualifications,
      penalty_points,
      experience_years,
      work_type,
      available,
    ],
    (err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );
});

// *******Post Employer DATA to database******
app.post("/employer_register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const location = req.body.location;
  const registration = req.body.registration;
  const website = req.body.website;
  const phone = req.body.phone;

  // DB Query
  db.query(
    "INSERT INTO company(company_name,company_email,company_reg_num,company_website,company_phone,company_location,registration_date) VALUES(?,?,?,?,?,?,now())",
    [name, email, registration, website, phone, location],
    (err, result) => {
      // Check for errors when POST
      if (err) throw err;
      console.log(result);
    }
  );
});
