import { httpGET } from "./modules/http.js";
import {
  cardElGen,
  cardsListElGen,
  listsContainerElGen,
  navbarSearch,
  navbarLinks,
} from "./modules/components.js";

import { createModal } from "./modules/modal.js";

// ---NAV---
const navSelectionEl = document.querySelector(".navbar");
navSelectionEl.append(navbarSearch(), navbarLinks());

// ---MODAL---

const fetchDataAndCreateModals = async () => {
  const data = await httpGET("/tv/top_rated");
  const firstImg = data.results[0];
  const modal = createModal(
    "Scopri la magia del Natale con i nostri incredibili sconti! Rendiamo le tue feste ancora più speciali con le storie che ami, regalando intrattenimento di qualità a te e ai tuoi cari. Festeggia la stagione natalizia con Netflix!",
    "Scopri",
    "Chiudi",
    firstImg
  );
  document.body.appendChild(modal);
};

//!!!!! Decommentare per attivare la modale da mostrare sulla pagina:
// fetchDataAndCreateModals();

// ---MAIN---

const asyncListContainerElGen = async (endpoint, title) => {
  const data = await httpGET(endpoint);
  const listContainerEl = listsContainerElGen(title);
  const cardsListEl = cardsListElGen();

  data.results.map((serie) => cardsListEl.append(cardElGen(serie)));
  listContainerEl.append(cardsListEl);

  return listContainerEl;
};

// asyncListContainerElGen("/movie/upcoming", "film boh").then((data) =>
//   console.log(data)
// );

const mainSectionEl = document.querySelector(".main");

// 1 STEP
// httpGET("/tv/top_rated").then((data) => {
//   const listContainerEl = listsContainerElGen("Top Rated");
//   const cardsListEl = cardsListElGen();

//   data.results.map((serie) => cardsListEl.append(cardElGen(serie)));

//   listContainerEl.append(cardsListEl);
//   mainSectionEl.append(listContainerEl);
// });

// httpGET("/tv/popular").then((data) => {
//   const listContainerEl = listsContainerElGen("Popular");
//   const cardsListEl = cardsListElGen();

//   data.results.map((serie) => cardsListEl.append(cardElGen(serie)));

//   listContainerEl.append(cardsListEl);
//   mainSectionEl.append(listContainerEl);
// });

// 2 STEP
// asyncListContainerElGen("/movie/upcoming", "Movies - Upcoming").then(
//   (element) => mainSectionEl.append(element)
// );

// asyncListContainerElGen("/movie/now_playing", "Movies - Now Playing").then(
//   (element) => mainSectionEl.append(element)
// );

// asyncListContainerElGen("/tv/top_rated", "Serie Tv - Top Rated").then(
//   (element) => mainSectionEl.append(element)
// );
// asyncListContainerElGen("/tv/popular", "Serie Tv - Popular").then((element) =>
//   mainSectionEl.append(element)
// );

// 3 STEP
Promise.all([
  asyncListContainerElGen("/movie/upcoming", "Movies - Upcoming"),
  asyncListContainerElGen("/movie/now_playing", "Movies - Now Playing"),
  asyncListContainerElGen("/tv/top_rated", "Serie Tv - Top Rated"),
  asyncListContainerElGen("/tv/popular", "Serie Tv - Popular"),
]).then((elements) => elements.map((el) => mainSectionEl.append(el)));
