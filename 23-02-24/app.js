const express = require("express");
const authorization = require("./auth");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./public/index.html");
  console.log(req.query);
});

app.get("/dashboard", authorization, (req, res) => {
  res.sendFile(__dirname + "./public/index.html");
  console.log(req.query);
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/form.html");
});

app.post("/mostra-dati", (req, res) => {
  const { nome } = req.body;
  const { cognome } = req.body;

  if (nome && cognome) {
    res.status(200).send(`Benvenuto ${nome} ${cognome}`);
  }
  res.status(404).send("Aggiungi i dati");
});

const PORT = 8000;
app.listen(PORT, () => console.log("Server start"));
