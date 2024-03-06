const express = require("express");
const articoli = require("../articoli.json");

const routerHome = express.Router();
const routerUomo = express.Router();
const routerDonna = express.Router();
const routerBambino = express.Router();

routerHome.use(express.static("./public"));

routerHome.get("/", (req, res) => {
  res.sendFile(__dirname + "/./public/index.html");
});

routerUomo.get("/uomo", (req, res) => {
  const uomoArticoli = articoli.find((item) => item.categoria === "uomo");
  res.render("uomo", {
    articles: uomoArticoli,
  });
});

routerDonna.get("/donna", (req, res) => {
  const donnaArticoli = articoli.find((item) => item.categoria === "donna");
  res.render("donna", {
    articles: donnaArticoli,
  });
});

routerBambino.get("/bambino", (req, res) => {
  const bambinoArticoli = articoli.find((item) => item.categoria === "bambino");
  res.render("bambino", {
    articles: bambinoArticoli,
  });
});

module.exports = { routerHome, routerUomo, routerDonna, routerBambino };
