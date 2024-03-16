const express = require("express");
const fs = require("fs");
const app = express();

let musicLibrary = [
  {
    id: 1,
    title: "Figaro Marriage",
    author: "Mozart",
    year: "1786",
  },
];

app.use(express.json());

app.get("/music", (req, res, next) => {
  res.json(musicLibrary);
});

app.post("/music", (req, res, next) => {
  const body = req.body;

  if (body.id && body.title && body.author && body.year) {
    let newMusic = musicLibrary.push(body);
    res.status(201).send("New music added");
  } else {
    res.status(400).send("Please add all keys");
  }
});

app.delete("/music/:id", (req, res) => {
  let idMusic = +req.params.id;

  musicLibrary = musicLibrary.filter((el) => el.id !== idMusic);
  res.send(`Remove id: ${idMusic}`);
});

app.get("/music/year/crescente", (req, res, next) => {
  const orderYear = musicLibrary.sort((a, b) => a.year - b.year);
  res.json(orderYear);
});

app.get("/music/year/decrescente", (req, res, next) => {
  const orderYear = musicLibrary.sort((a, b) => b.year - a.year);
  res.json(orderYear);
});

app.get("/", (req, res) => {
  res.send("Welcome this is hompepage");
});

app.listen(3000, () => console.log("server started"));
