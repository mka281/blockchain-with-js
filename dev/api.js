const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/blockchain", (req, res) => {});

app.post("/transaction", (req, res) => {
  console.log(req.body);
  res.send(`The amount of the transaction is ${req.body.amount} bitcoin`);
});

app.get("/mine", (req, res) => {});

app.listen(3000, () => console.log("Listening on port 3000!"));
