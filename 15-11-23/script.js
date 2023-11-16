// # Esercizio 1

// Sulla base della lezione del 14 Novembre, trasferire tutta la parte logica del codice fatto a lezione in modo statico (HTML) in modo dinamico (JAVASCRIPT). Quindi creando vo

const createElements = (element) => document.createElement(element);

// h3 non viene ripetuto per ogni cards
const sectionEl = createElements("section");
const h3El = createElements("h3");
h3El.textContent = "Recommended For You";
sectionEl.appendChild(h3El);

const divList = createElements("div");
divList.className = "robo-list";

function roboProdGen(data) {
  // const sectionEl = createElements("section");
  // const h3El = createElements("h3");
  // const divList = createElements("div");
  const divRobo = createElements("div");
  const firstSpan = createElements("span");
  const secondSpan = createElements("span");
  const firstButton = createElements("button");
  const secondButton = createElements("button");
  const firstIcon = createElements("i");
  const secondIcon = createElements("i");
  const imgEl = createElements("img");
  const divText = createElements("div");
  const pEl = createElements("p");
  const h4El = createElements("h4");

  sectionEl.className = "recommended";
  // h3El.textContent = "Recommended For You";
  // divList.className = "robo-list";
  divRobo.className = "robo";
  firstIcon.className = "bi bi-heart";
  secondIcon.className = "bi bi-plus-lg";
  imgEl.src = data.imageUrl;
  imgEl.alt = data.roboName;
  divText.className = "text";
  pEl.textContent = data.price + "$";
  h4El.textContent = data.roboName;

  sectionEl.append(divList);
  divList.appendChild(divRobo);
  divRobo.append(firstSpan, secondSpan, imgEl, divText);
  firstSpan.appendChild(firstButton);
  secondSpan.appendChild(secondButton);
  firstButton.appendChild(firstIcon);
  secondButton.appendChild(secondIcon);
  divText.append(pEl, h4El);

  firstButton.addEventListener("click", () => {
    if (data.isFavorite == true) {
      data.isFavorite = false;
      firstIcon.classList.remove("bi-heart-fill");
      firstIcon.classList.add("bi-heart");
    } else {
      data.isFavorite = true;
      firstIcon.classList.remove("bi-heart");
      firstIcon.classList.add("bi-heart-fill");
    }
  });

  return divList;
}

const mockData = [
  {
    id: 1,
    roboName: "Casi",
    price: 445,
    isFavorite: false,
    imageUrl: "https://robohash.org/casi",
  },
  {
    id: 2,
    roboName: "Alex",
    price: 1000,
    isFavorite: false,
    imageUrl: "https://robohash.org/alex",
  },
  {
    id: 3,
    roboName: "Pippo",
    price: 30,
    isFavorite: false,
    imageUrl: "https://robohash.org/pippo",
  },
  {
    id: 4,
    roboName: "Federica",
    price: 44,
    isFavorite: false,
    imageUrl: "https://robohash.org/federica",
  },
  {
    id: 5,
    roboName: "Topolino",
    price: 40,
    isFavorite: false,
    imageUrl: "https://robohash.org/topolino",
  },
  {
    id: 6,
    roboName: "Pluto",
    price: 55,
    isFavorite: false,
    imageUrl: "https://robohash.org/pluto",
  },
  {
    id: 7,
    roboName: "Minnie",
    price: 30,
    isFavorite: false,
    imageUrl: "https://robohash.org/minnie",
  },
  {
    id: 8,
    roboName: "Paperino",
    price: 88,
    isFavorite: false,
    imageUrl: "https://robohash.org/paperino",
  },
  {
    id: 9,
    roboName: "Paperone",
    price: 233,
    isFavorite: false,
    imageUrl: "https://robohash.org/paperone",
  },
  {
    id: 10,
    roboName: "Qui",
    price: 54,
    isFavorite: false,
    imageUrl: "https://robohash.org/qui",
  },
  {
    id: 11,
    roboName: "Quo",
    price: 98,
    isFavorite: false,
    imageUrl: "https://robohash.org/quo",
  },
  {
    id: 12,
    roboName: "Qua",
    price: 29,
    isFavorite: false,
    imageUrl: "https://robohash.org/qua",
  },
];

// ----NAV---
function createNav() {
  const nav = createElements("nav");
  const containerNav = createElements("div");
  const h2El = createElements("h2");
  const divIconsNav = createElements("div");
  const firstButtonNav = createElements("button");
  const secondButtonNav = createElements("button");
  const firstIconEl = createElements("i");
  const secondIconEl = createElements("i");

  containerNav.className = "container--nav";
  h2El.textContent = "Find Best Furnitures";
  divIconsNav.className = "nav-icons";
  firstIconEl.className = "bi bi-search";
  secondIconEl.className = "bi bi-cart";

  nav.appendChild(containerNav);
  containerNav.append(h2El, divIconsNav);
  divIconsNav.append(firstButtonNav, secondButtonNav);
  firstButtonNav.appendChild(firstIconEl);
  secondButtonNav.appendChild(secondIconEl);

  return nav;
}

//---- HEAD-----
const headerEl = createElements("header");
const containerHead = createElements("div");

function createHead(data) {
  const iconHead = createElements("div");
  const buttonEl = createElements("button");
  const iEl = createElements("i");
  const pEl = createElements("p");

  containerHead.className = "container--head";
  iconHead.className = data.divIconHead;
  iEl.className = data.classIcon;
  pEl.textContent = data.text;

  containerHead.appendChild(iconHead);
  iconHead.append(buttonEl, pEl);
  buttonEl.appendChild(iEl);

  return containerHead;
}

const mockHead = [
  {
    id: 1,
    text: "All",
    classIcon: "bi bi-search",
    divIconHead: "icon-head icon-head-black",
  },
  {
    id: 2,
    text: "Flowers",
    classIcon: "bi bi-flower2",
    divIconHead: "icon-head",
  },
  {
    id: 3,
    text: "Abc",
    classIcon: "bi bi-boombox",
    divIconHead: "icon-head",
  },
  {
    id: 4,
    text: "Type",
    classIcon: "bi bi-dribbble",
    divIconHead: "icon-head",
  },
  {
    id: 5,
    text: "Classic",
    classIcon: "bi bi-award",
    divIconHead: "icon-head",
  },
];

// # Esercizio 2

// Applicare un costrutto per la gestione degli errori Try e Catch all'esecuzione della funzione `roboProdGen`.
// Non importa scatenare alcun errore specifico, basta la sintassi corretta applicata nel modo giusto.

//NAV
// document.body.appendChild(createNav());
//HEADER
mockHead.map((el) => headerEl.appendChild(createHead(el)));
// document.body.appendChild(headerEl);

try {
  mockData.map((element) => sectionEl.appendChild(roboProdGen(element)));
} catch (error) {
  if (error.message.split(" ")[0] === "mockData") {
    console.error("Manca l'array di oggetti MockData");
  } else if (error.message.split(" ")[0] === "roboProdGen") {
    console.error("Manca la funzione roboProdGen");
  }
} finally {
  console.log("Tutto ok");
}

// #Avanzato

const divContainerAll = createElements("div");
divContainerAll.className = "container--all";
document.body.appendChild(divContainerAll);
divContainerAll.append(createNav(), headerEl, sectionEl);
