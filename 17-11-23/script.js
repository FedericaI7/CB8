// # Esercizio 1

// Sulla base della lezione del giorno, creare un timer al cui scadere di 3 secondi e mezzo chieda
// all'utente se è maggiorenne con un popup.
// Il popup è solo testuale, nessun altro elemento.

console.log("ciao");

const cE = (el) => document.createElement(el);
const createPopup = (text, firstBtnText, secondBtnText) => {
  const wrapperEl = cE("div");
  const textEl = cE("p");
  const divBtn = cE("div");
  const firstButton = cE("button");
  const secondButton = cE("button");

  wrapperEl.className = "div--container";
  textEl.textContent = text;
  divBtn.className = "container--btn";
  firstButton.textContent = firstBtnText;
  secondButton.textContent = secondBtnText;
  firstButton.className = "first-button";
  secondButton.className = "second-button";

  wrapperEl.append(textEl, divBtn);
  divBtn.append(firstButton, secondButton);

  return wrapperEl;
};

setTimeout(() => {
  let popUp = document.body.appendChild(
    createPopup("Sei maggiorenne?", "si", "no")
  );

  let firstButton = document.querySelector(".first-button");
  let secondButton = document.querySelector(".second-button");
  let testoSfondo = document.querySelector(".testo-sfondo");

  firstButton.addEventListener("click", () => {
    popUp.remove();
    testoSfondo.style.display = "block";
  });

  secondButton.addEventListener("click", () => {
    window.location.href = "https://www.google.com/";
  });
}, 3500);

// # Esercizio 2
// Eseguire una chimata di tipo `fetch` al seguente indirizzo `https://dummyjson.com/products`.

// Dalla risposta che ne consegue, stampare un array che contiene non tutti i valori ma solo quelli il cui prezzo
// (chiave `price`) sia inferiore a 50.

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => data.products.filter((prod) => prod.price < 50));

//   # Esercizio avanzato

// A partire dall'esercizio 1, aggiungere due pulsanti uno con su scritto `Si` e uno `No` che svolgano
//  le seguenti attività:

// - il pulsante `si` chiude il popup (eliminandolo) e lasciando all'utente la possibilità di continuare a vedere il sito;
// - il pulsante `no` che fa un redirect a `google.com` (per il redirect cercate sulla rete come fare);

// Inoltre, quando il popup è attivo (quindi aperto con la scelta di prese `si` o `no`), il resto della pagina sottostante deve essere nascosta.
