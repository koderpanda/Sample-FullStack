const express = require("express");
const bodyparser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;
const secret = 'S3cr3t';

app.use(cors());
app.use(bodyparser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

function authenticateAdmin(req, res, next) {
  console.log('Inauthentication')
  next;
}

app.post("/admin/signin",  (req, res) => {
  admin = req.body;
  fs.readFile("admin.json", "utf8", (err, data) => {
    existadmins = JSON.parse(data);
    if (admin.uname == "" || admin.pwd == "") {
      res.status(400).send("invalid UserName Password");
    } else if (existadmins.findIndex((item) => item.uname == admin.uname) > -1) {
      console.log("found match")
      var indexMatch = existadmins.findIndex(
        (item) => item.uname == admin.uname
      );
      if (existadmins[indexMatch].pwd == admin.pwd) {
        //create hash
        admin.token = jwt.sign(admin.uname | admin.pwd, secret);
        res.send(JSON.stringify(admin));
      } else {
        res.status(400).send("invalid Uname or Pwd");
      }
    } else {
      res.status(400).send("invalid Uname or Pwd");
    }
  });
});

app.post("/admin/signup", (req, res) => {
  admin = req.body;
  console.log(admin);
  if (admin.uname == "" || admin.pwd == "") {
    res.sendStatus(400, "invalid UserName Password");
  } else {
    admin["id"] = Math.floor(Math.random() * 1000000);
    var existadmins = [];
    fs.readFile("admin.json", "utf8", (err, data) => {
      existadmins = JSON.parse(data);
      // console.log("check for existing unamers: "+((existadmins.findIndex((item)=> item.uname==admin.uname))>(-1)))
      if (existadmins == null) existadmins = admin;
      else if (existadmins.findIndex((item) => item.uname == admin.uname) > -1)
        res.status(400).send("User already exists- try using Signin");
      else {
        existadmins.push(admin);
        fs.writeFile("admin.json", JSON.stringify(existadmins), (err) => {
          if (err) {
            res.sendStatus(404, "Unable to register Admin" + err);
            existadmins = [];
            throw err;
          } else {
            res.send(200, req.body);
            existadmins = [];
          }
        });
      }
    });
  }
});

app.listen(port, () => {
  console.log(`Coursera Backend listening on port ${port}`);
});
