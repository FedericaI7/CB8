// Crea un'applicazione Express che gestisca una piccola libreria virtuale.
// L'utente può aggiungere i suoi libri preferiti e visualizzarli in una lista.
// Ogni libro avrà un titolo e un autore.
// Imposta il tuo progetto Express usando body-parser per gestire i dati del form.
// Crea un array di libri nel tuo file principale server.js che fungerà da semplice database.
// Implementa la rotta GET /add-book che mostra un form HTML per aggiungere un nuovo libro.
// Il form deve avere campi per il titolo del libro e l'autore.
// Implementa la rotta POST /books per aggiungere un nuovo libro all'array dei libri.
// Dopo l'aggiunta, reindirizza l'utente alla pagina che mostra tutti i libri.
// Implementa la rotta GET /books che mostra una lista di tutti i libri aggiunti.
// Non preoccupatevi di come mostrate o gestite le informazioni, scegliete pure l'approccio che ritenete più opportuno. L'approccio migliore lo vediamo a lezione insieme con implementazioni simili o affini.

const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

let books = [];

app.get("/add-book", (req, res) => {
  res.send(`<form action="/books" method="POST">
  <input type="text" name="author" placeholder="Author"></input>
  <input type="text" name="title" placeholder="title"></input>
  <input type="submit"></input>
  </form>`);
});

app.post("/books", (req, res) => {
  const { author } = req.body;
  const { title } = req.body;

  if (!author || !title) {
    res.status(404).send("Add data, please");
  } else {
    books.push({ author, title });
  }

  res.redirect("/books");
  console.log(books);
});

app.get("/books", (req, res) => {
  let bookList = books.map((el) => `${el.title} ${el.author}`);
  res.send(bookList);
});

app.get("/", (req, res) => {
  res.send("homepage");
});

app.listen(3000, () => {
  console.log("server started");
});
