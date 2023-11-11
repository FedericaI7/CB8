// # Esercizio 1

// Tra le molteplici sezioni ed effetti visivi nel web, esistono alcuni elementi ricorrenti.
//  Tra questi sicuramente emergono le cards, i caroselli, gli sliders di immagini, e così via.
//  Per l'esercitazione numero 1, creare una `sezione hero` **_dinamicamente_** (quindi javascript).

const headerEl = document.createElement("header");
document.body.appendChild(headerEl);

const heroContainer = document.createElement("div");
heroContainer.className = "hero--container";

headerEl.appendChild(heroContainer);
const divText = document.createElement("div");
divText.className = "text";
heroContainer.appendChild(divText);
const h1El = document.createElement("h1");
h1El.textContent = "Et ratione soluta ad repellat incidunt";
divText.appendChild(h1El);
const btnClick = document.createElement("button");
btnClick.className = "btn-click";
btnClick.textContent = "Click";
heroContainer.appendChild(btnClick);

//bottone back
let divBtnBack = document.createElement("div");
divBtnBack.setAttribute("class", "div-back");
let btnBack = document.createElement("button");
btnBack.setAttribute("class", "btn-back");
btnBack.textContent = "Back";
divBtnBack.appendChild(btnBack);
headerEl.appendChild(divBtnBack);

// # Esercizio 2

// Sicuramente la vostra Hero page includerà un button vero? (Se non lo avete aggiunto correte!).
// Aggiungere a questo pulsante un evento di tipo `click`, cosicchè non appena viene cliccato scateni una
//  funzione che nasconda tutta la `sezione hero` per intera. (Aiutatevi con la proprietà CSS `display: none`).

btnClick.addEventListener("click", () => {
  heroContainer.style.display = "none";
  btnBack.style.display = "block";
});

// btnBack.addEventListener("click", () => {
//   heroContainer.style.display = "block";
//   btnBack.style.display = "none";
// });  // Non ha funzionato in quanto la presenza dell'animazione ha richiesto uno step diverso

btnBack.addEventListener("click", () => {
  heroContainer.style.display = "flex";
  btnBack.style.display = "none";
  divText.classList.remove("text");
  void divText.offsetWidth;
  divText.classList.add("text");
});

// # Avanzato

// Sulla base dell'oggetto fornito sotto, creare una `sezione gallery`. Questa sezione deve essere popolata dinamicamente,
// attraverso una funzione creata ad-hoc `imageGenerator` che generi una immagine in base agli argomenti passati
// all'invocazione. Il risultato deve essere almeno una immagine completa di `src`, `alt` e `id`.
// Trovate Queste 3 chiavi all'interno dell'oggetto stesso.
// Inoltre l'immagine avrà anche un attributo di tipo `class` che permetterà l'aggiunta di CSS.

// ```javascript
// {
//   id: 1,
//   imgUrl: 'https://picsum.photos/200/200?1',
//   altText: 'Immagine alternativa 1'
// }

const main = document.createElement("main");
document.body.appendChild(main);
const divGallery = document.createElement("div");
divGallery.setAttribute("class", "container--gallery");
main.appendChild(divGallery);

const imageGenerator = (imgUrl, altText, id) => {
  const imgEl = document.createElement("img");

  imgEl.setAttribute("src", imgUrl);
  imgEl.setAttribute("alt", altText);
  imgEl.setAttribute("id", id);

  return imgEl;
};

const image1 = imageGenerator(
  "/img/alessia-cocconi-5MgXyWVpBMA-unsplash.jpg",
  "immagine palazzo 1",
  1
);

const image2 = imageGenerator(
  "/img/alessia-cocconi-8WzCaqC_0ic-unsplash.jpg",
  "immagine palazzo 2",
  2
);

const image3 = imageGenerator(
  "/img/alessia-cocconi-vf8vmRXy3Jk-unsplash.jpg",
  "immagine palazzo 3",
  3
);

divGallery.append(image1, image2, image3);

// # -----Avanzato per gli audaci------

// Qui cè un array di oggetti, renderizzare n immagini per quanti sono gli oggetti presenti nell'array.
// Utilizzare la stessa funzione `imageGenerator`.
// Attenzione, la funzione `imageGenerator` deve essere pura!

const imageList = [
  {
    id: 1,
    imgUrl: "/img/alessia-cocconi-u1e5Wf9ZQ3c-unsplash.jpg",
    altText: "Immagine 1",
  },
  {
    id: 2,
    imgUrl: "/img/alessia-cocconi-eElpS2uHBfU-unsplash.jpg",
    altText: "Immagine 2",
  },
  {
    id: 3,
    imgUrl: "/img/hannah-reding-up_eXpavxb0-unsplash.jpg",
    altText: "Immagine 3",
  },
  {
    id: 4,
    imgUrl: "/img/hannah-reding-uk23ZxrIwB0-unsplash.jpg",
    altText: "Immagine 4",
  },
  {
    id: 5,
    imgUrl: "/img/hannah-reding-r483Jj9Yh_g-unsplash.jpg",
    altText: "Immagine 5",
  },
  {
    id: 6,
    imgUrl: "/img/mana5280-kYTsCu81m98-unsplash.jpg",
    altText: "Immagine 6",
  },
  {
    id: 7,
    imgUrl: "/img/hannah-reding-2EUW0eUhl_w-unsplash.jpg",
    altText: "Immagine 7",
  },
  {
    id: 8,
    imgUrl: "/img/guillaume-didelet-e3drwPGcbRI-unsplash.jpg",
    altText: "Immagine 8",
  },
  {
    id: 9,
    imgUrl: "/img/hannah-reding-8mvfJ3T9UQU-unsplash.jpg",
    altText: "Immagine 9",
  },
  {
    id: 10,
    imgUrl: "/img/caleb-maxwell-Vd2db_TaVTM-unsplash.jpg",
    altText: "Immagine 10",
  },
];

// COMMENTO///La funzione imageGenerator si aspetta tre argomenti separati, ho destrutturato i valori dall'array di oggetti
// assegnandoli alla variabile "data", successivamente ho usato questi valori per richiamare la funzione imageGenerator.
//Nell'append ho usato lo spread, così da evitare di scrivere (images[0], images[1]) ecc

const images = imageList.map((data) => {
  const { id, imgUrl, altText } = data;
  return imageGenerator(imgUrl, altText, id);
});

divGallery.append(...images);

//SECONDO COMMENTO: Ho eseguito l'esercizio senza apportare modifiche all'id dell'array, che in quanto
//identificativo unico avrebbe dovuto avere un id che partiva da 4, considerate le altre 3 precedenti immagini
//dell'esercizio precdente.
