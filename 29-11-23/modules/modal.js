// AVANZATO
// Creare una modale, per il momento che non si apra ad alcun evento, che recuperi un oggetto tramite fetch
// dalla stessa API usata nel progetto.
// Siate creativi in questo, lo stile e le funzionalità sono a vostro piacere

const cE = (el) => document.createElement(el);

const createModal = (text, firstBtnText, secondBtnText, imageData) => {
  const divContainer = cE("div");
  const wrapperEl = cE("div");
  const textEl = cE("p");
  const imgEl = cE("img");
  const divBtn = cE("div");
  const firstButton = cE("button");
  const secondButton = cE("button");

  divContainer.className = "div-container";
  wrapperEl.className = "div--container";
  textEl.textContent = text;
  imgEl.src = `https://image.tmdb.org/t/p/w200${imageData.poster_path}`;
  imgEl.alt = imageData.name;
  divBtn.className = "container--btn";
  firstButton.textContent = firstBtnText;
  firstButton.className = "first-btn";
  secondButton.textContent = secondBtnText;
  secondButton.className = "second-btn";
  firstButton.className = "first-button";
  secondButton.className = "second-button";

  divContainer.append(wrapperEl);
  wrapperEl.append(textEl, imgEl, divBtn);
  divBtn.append(firstButton, secondButton);

  secondButton.addEventListener("click", () => {
    divContainer.style.display = "none";
  });

  return divContainer;
};

export { createModal };
