// Devi gestire un piccolo negozio online che vende
// t-shirt per uomo, donna e bambino.
// Progetta la soluzione più efficiente per il routing
// della tua app a partire dai router che
// potranno esserti utili.
// Potrebbe aiutarti creare uno schema con il workflow
// strutturale dell’ app.
// Per le risorse da gestire puoi usare degli oggetti json
// Implementa la tua app con risorse statiche e configura
//  un template engine.

const express = require("express");
const hbs = require("hbs");
const {
  routerHome,
  routerUomo,
  routerDonna,
  routerBambino,
} = require("./routes/routes");

const app = express();

app.set("view engine", "hbs");

app.use("/", routerHome);

app.use("/articoli/t-shirt/", routerDonna, routerUomo, routerBambino);

// app.use("/articoli", routerDonna);

PORT = 4000;

app.listen(PORT, () => {
  console.log("server started");
});
