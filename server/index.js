const express = require("express");
const app = express();
const mysql= require("mysql")
const cors=require("cors")


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "furniturexx",
  });
  
  app.post("/create", (req, res) => {
    const name = req.body.name;
    const mail = req.body.mail;
    const phone = req.body.phone;
    const message = req.body.message;
  
    db.query(
      "INSERT INTO messages (name, mail, phone, message) VALUES (?,?,?,?)",
      [name, mail, phone, message],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });
  


app.listen(3001,() =>{
    console.log("your server is running")
})