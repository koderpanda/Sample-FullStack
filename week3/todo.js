/*Backend sytem for TODO apps
 */
const bodyparser = require("body-parser");
const cors= require("cors")
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

//Using Cors to avoid cors error
app.use(cors());


//using body parser to parse the json
app.use(bodyparser.json());

app.get("/todo", (req, res) => {
  fs.readFile("todo.json", "utf8", (err, data) => {
    if (err) throw err;
    else {
      res.json(JSON.parse(data));
    }
  });
});

app.post("/todo", (req, res) => {
  console.log("in post");
  task = req.body;
  console.log(task);
  task["id"] = Math.floor(Math.random() * 10000000);
  var todoArr = [];
  fs.readFile("todo.json", "utf8", (err, data) => {
    if (err) throw err;
    else {
      console.log("parsed json data " + JSON.parse(data));
      todoArr = JSON.parse(data);
      todoArr.push(task);
      fs.writeFile("todo.json", JSON.stringify(todoArr), (err) => {
        if (err == null) {
          console.log("Todo updated in fs");
          res.send(201, req.body);
          todoArr = [];
        } else {
          console.log(err);
        }
      });
    }
  });
});

app.delete("/todo/:id", (req, res) => {
  console.log(req.params.id);
  var todoArr = [];
  fs.readFile("todo.json", "utf8", (err, data) => {
    console.log("id for deleteion: " + req.params.id);
    if (err) throw err;
    else {
      //   console.log(JSON.parse(data));
      todoArr = JSON.parse(data);
      //   console.log(todoArr);
      //   console.log(todoArr.length);
      //   console.log(JSON.stringify(todoArr));
      var indexToRemove = todoArr.findIndex((item) => item.id == req.params.id);
      console.log("indexto remove " + indexToRemove);
      if (indexToRemove > 0) {
        console.log(todoArr.splice(indexToRemove, 1));
        fs.writeFile("todo.json", JSON.stringify(todoArr), (err) => {
          if (err == null) {
            console.log("Todo updated in fs");
            todoArr = [];
          } else {
            console.log(err);
          }
        });
        res.send(req.params.id + " Removed");
      } else res.send(400, "Invalid ID");
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//for all other routes send 404
app.use((req, res, next) => {
  res.status(404).send("path not found");
});
app.listen(port, () => {
  console.log("listening at " + port);
});
