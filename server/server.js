const mysql = require("mysql");
// Add EXPRESS
const express = require("express");
// Assign body-parser to variable
const bodyParser = require("body-parser");
// Set app to run EXPRESS
const app = express();

// Add CORS
const cors = require("cors");
// Set app to use CORS
app.use(cors());
// Set up HEADERS to be used by CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

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
      res.send(result);
      console.log("User added : " + req.body.name);
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

// *******Login with NAME and EMAIL params******
app.post("/login", (req, res) => {
  const { username, email } = req.body;
  const values = [username, email];

  // DB Query
  db.query(
    "Select * FROM users where first_name = ? AND email = ?",
    values,
    (err, result) => {
      // Check for errors when POST
      if (err) {
        res.send("Error from server file");
      }
      //Check if data came back, send back in OBJECT(assign values)
      if (result.length > 0) {
        res.send({
          id: result[0].id,
          name: result[0].first_name,
          email: result[0].email,
        });
        console.log(result[0]);
      } else {
        res.send({ message: "No user found with given credentials!!!" });
        console.log("No user with that name/email combo");
      }
    }
  );
});
