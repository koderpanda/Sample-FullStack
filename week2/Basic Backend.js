/*
Basic Backend with multiple routes and multiple return types
like text file json etc

*/

const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;

//Using an external library to parse the body of the req to JSON format. This is an external library and installed using npm insall body-parser
app.use(bodyparser.json());

//Middleware used for authentication and logging
app.use((req, res, next) => {
  console.log("logging from middleware " + req.headers.value);
  next();
});

//root handler
app.get("/", (req, res) => {
  res.send("HareKrsna");
});

//Uses the body value that was parsed using the BodyParser
app.get("/getbodydata", (req, res) => {
  console.log(req.body);
  res.send(200, req.body.value);
});

//Extracting the values from Query Parameter from the URL
app.get("/reqsum", (req, res) => {
  console.log(req.query.value);
  res.send(200, numSum(req.query.value));
});

//Extracting the values from the Headers of the request
app.get("/reqsumhead", (req, res) => {
  // console.log(req.headers);
  res.send(200, numSum(req.headers.value));
});

function numSum(n) {
  sumn = 0;
  for (i = 0; i <= n; i++) {
    sumn += i;
  }
  return sumn;
}

function numMul(n) {
  muln = 1;
  for (i = 1; i <= n; i++) {
    muln *= i;
  }
  return muln;
}

//Handler to return the varied status code based on the input received
app.get("/handleErr", (req, res) => {
  if (req.body.value > 100) {
    res.status(401).send("too big number to handle");
  } else {
    res.send(200, numSum(req.body.value));
  }
});

app.get("/json", (req, res) => {
  resobj = {
    sum: numSum(req.body.value),
    mul: numMul(req.body.value),
  };
  res.send(resobj);
});

app.get("/gethtml", (req, res) => {
  res.send(`<html><body><h1>HariBol</h1><body></html>`);
});

app.get("/getfile", (req, res) => {
  res.sendFile(__dirname + "/test.txt");
});

// console.log(numSum(10))

//Initiates the Express Server- long running processs
app.listen(port, () => {
  console.log("listening at " + port);
});
