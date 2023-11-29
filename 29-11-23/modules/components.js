const listsContainerElGen = (title) => {
  const container = document.createElement("div");
  const titleEl = document.createElement("h3");

  container.className = "lists-container";
  titleEl.textContent = title;

  container.append(titleEl);
  return container;
};

const cardsListElGen = () => {
  const container = document.createElement("div");

  container.className = "cards-list";

  return container;
};

const cardElGen = (imageData) => {
  const imageEl = document.createElement("img");

  imageEl.className = "card-item";
  imageEl.src = `https://image.tmdb.org/t/p/w500${imageData.poster_path}`;
  imageEl.alt = imageData.name;

  return imageEl;
};

// Scrivere in Javascript (quindi dinamico) tutta la sezione HTML relativa alla Navbar (mobile), lasciando come elemento iniziale HTML il tag `<nav class="navbar">`.
// Cosi come abbiamo fatto con la sezione main `<main class="main">` oggi a lezione.

const navbarSearch = () => {
  const divSearchContainer = document.createElement("div");
  const imgEl = document.createElement("img");
  const inputEl = document.createElement("input");

  divSearchContainer.className = "search";
  imgEl.src =
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png";
  imgEl.alt = "netflix-clone-logo";
  inputEl.setAttribute("type", "text");
  inputEl.setAttribute("placeholder", "Search");

  divSearchContainer.append(imgEl, inputEl);

  return divSearchContainer;
};

const navbarLinks = () => {
  const divLinksContainer = document.createElement("div");
  const ulEl = document.createElement("ul");
  const firstLi = document.createElement("li");
  const secondiLi = document.createElement("li");
  const labelEl = document.createElement("label");
  const selectEl = document.createElement("select");
  const optionEl = document.createElement("option");

  divLinksContainer.className = "links";
  ulEl.className = "links-list";
  firstLi.textContent = "TV Shows";
  secondiLi.textContent = "Movies";
  labelEl.setAttribute("for", "categories");
  labelEl.textContent = "Categories";
  selectEl.setAttribute("name", "categories");
  selectEl.id = "categories";
  optionEl.value = "";

  divLinksContainer.appendChild(ulEl);
  ulEl.append(firstLi, secondiLi, labelEl, selectEl);
  selectEl.appendChild(optionEl);

  return divLinksContainer;
};

export {
  cardElGen,
  cardsListElGen,
  listsContainerElGen,
  navbarSearch,
  navbarLinks,
};
