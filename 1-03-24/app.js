// Crea una  json con oggetti a tua scelta da usare come risorsa che verrà messa a disposizione dalla
// tua API.
// La visualizzazione dei dati sarà renderizzata da un template hbs. Questa pagina sarà linkata da una
// home.
// Gli altri end point saranno descritti, cioè indicati, in un’altra pagina che puoi chiamare come vuoi
// sempre linkata dalla home.
// Ovviamente tutti gli end point che non rispondono ad un metodo GET, potrai testarli su Postman.

const express = require("express");
const hbs = require("hbs");
const people = require("./people.json");

const app = express();
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/people", (req, res) => {
  res.render("people", {
    data: people,
    myFriends: true,
  });
});

app.get("/jobs", (req, res) => {
  res.render("jobs", {
    data: people,
    hobbies: ["dance", "play piano", "gardens", "fragrances"],
  });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log("server started");
});
