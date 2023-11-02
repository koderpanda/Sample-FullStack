/*Backend sytem for TODO apps
 */
const bodyparser = require("body-parser");
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

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
  task = req.body;
  task["id"] = Math.floor(Math.random() * 10000000);
  var todoArr = [];
  fs.readFile("todo.json", "utf8", (err, data) => {
    console.log("data before " + JSON.parse(data));
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
  var indexToRemove = todoArr.findIndex((item) => item.id == req.params.id);
  console.log(indexToRemove);
  if (indexToRemove < 0) {
    todoArr.splice(indexToRemove, 1);
    res.send(req.params.id + " Removed");
  } else res.send(400, "Invalid ID");
});

app.listen(port, () => {
  console.log("listening at " + port);
});
