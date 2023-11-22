// # Esercizio 1

// Sulla base della lezione del giorno, effettuare una chiamata al seguente endpoint e richiedere una lista di immagini.
//  Fare quindi il console log che presenti i soli valori contenuti dentro la chiave `download_url`.
//   Attenzione, usare Async/Await.

// Endpoint: `https://picsum.photos/v2/list`

//Qui creo una funzione che mi semplifica le chiamate fetch
const useFetch = async (urlfetch) => {
  const res = await fetch(urlfetch);
  const data = await res.json();

  return data;
};

// Prima chiamata Fetch con console.log delle foto
const fetchData = async () => {
  const data = await useFetch("https://picsum.photos/v2/list");
  data.map((x) => console.log(x.download_url));
};

fetchData();

// ESERCIZIO 2
//Qui creo una funzione che mi semplifica la creazione degli elementi
const cE = (element) => document.createElement(element);

const divContainer = cE("div");
divContainer.className = "container--all";
document.body.appendChild(divContainer);

const divEl = cE("div");
divEl.className = "div--h1";
divContainer.appendChild(divEl);
const h1El = cE("h1");
h1El.textContent = "Hello! These are my fav photos.";
divEl.appendChild(h1El);

const hrEl = cE("hr");
divEl.appendChild(hrEl);

const createImageText = (x) => {
  const wrapper = cE("div");
  const imgEl = cE("img");
  const textEl = cE("p");

  wrapper.className = "wrapper-container";
  imgEl.src = x.download_url;
  textEl.textContent = x.author;

  wrapper.append(imgEl, textEl);

  return wrapper;
};

const dataImageText = {
  id: "0",
  author: "Alejandro Escamilla",
  download_url: "https://picsum.photos/id/0/5000/3333",
};

//----!!!!!!Qui ho commentato la riga 62 per evitare di avere un elemento ripetututo !!!!------
// document.body.appendChild(createImageText(dataImageText));

//ESERCIZIO AVANZATO
// All'esercizio 2 aggiungere le seguenta funzionalità:
// - Non renderizzare più una sola immagine, ma la lista completa che arriva dalla chiamata dell'esercizio 1;

//Seconda chiamata Fetch
//Ho appeso la seconda fetch al divContainer creato a riga 28, in maniera tale da fare un flexbox

const avanzatoFetch = async () => {
  const data = await useFetch("https://picsum.photos/v2/list");

  data.map((item) => {
    const everyItem = createImageText(item);
    divContainer.appendChild(everyItem);
  });
};
avanzatoFetch();
