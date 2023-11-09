const express = require("express");
const bodyparser = require("body-parser");
const fs = require("fs");
const cors= require("cors")

const app = express();
const port = 3000;

app.use(cors())
app.use(bodyparser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/admin/signup", (req, res) => {
  admin = req.body;
  console.log(admin)
  if (admin.uname == "" || admin.pwd == "") {
    res.sendStatus(400, "invalid UserName Password");
  } else {
    admin["id"] = Math.floor(Math.random() * 1000000);
    var existadmin = [];
    fs.readFile("admin.json", "utf8", (err, data) => {
      existadmin = JSON.parse(data);
      if (existadmin == null) existadmin = admin;
      else existadmin.push(admin);
      fs.writeFile("admin.json", JSON.stringify(existadmin), (err) => {
        if (err) {
          res.sendStatus(404, "Unable to register Admin" + err);
          existadmin = [];
          throw err;
        } else {
          res.send(200, req.body);
          existadmin = [];
        }
      });
    });
  }
});

app.listen(port, () => {
  console.log(`Coursera Backend listening on port ${port}`);
});
