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

app.post("/register", (req, res) => {
  const name = req.body.name;
  const lname = req.body.lname;
  const email = req.body.email;

  db.query(
    "INSERT INTO users(first_name,last_name,email,register_date) VALUES (?,?,?,now())",
    [name, lname, email],
    (err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );
});
