// # Esercizio 1

// Sulla base della lezione di Lunedi, ricreare la funzione calcolatrice utilizzando le callbacks. Fate in modo che possa calcolare le quattro operazioni base matematiche ( + - \* /) e che prenda non due ma tre valori numerici sui quali eseguire queste operazioni.
// In questo caso, potete aiutarvi con il codice della lezione.

const sum = (value1, value2, value3) => value1 + value2 + value3;
const sub = (value1, value2, value3) => value1 - value2 - value3;
const mult = (value1, value2, value3) => value1 * value2 * value3;
const divis = (value1, value2, value3) => value1 / value2 / value3;

function calculator(fn) {
  return fn;
}

console.log(calculator(sum(100, 50, 30)));
console.log(calculator(sub(100, 50, 30)));
console.log(calculator(mult(100, 50, 30)));
console.log(calculator(divis(100, 50, 30)));

// # Esercizio 2

// Creare un array di oggetti che simuli la lista del carrello di un e-commerce. Ogni oggetto deve avere al suo interno almeno un id, un nome, una indirizzo per immagine, e una descrizione. Processate il seguente array di oggetti con map e forEach, e scriverne in commento la differenza. Basta solo stamparne il contenuto.

const cart = [
  {
    id: 1,
    name: "Red Car",
    img: "https://images.unsplash.com/photo-1514214089800-6f1f3ae37854?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The sleek red car sped down the winding mountain road, its engine purring with power.",
  },
  {
    id: 2,
    name: "Pink Car",
    img: "https://images.unsplash.com/photo-1603459128289-fd5b1b9bc309?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The soft pastel hue of the pink car gave it a charming and unique appearance, making it a standout choice for those who appreciated a more colorful ride.",
  },
  {
    id: 3,
    name: "Yellow Car",
    img: "https://images.unsplash.com/photo-1598084991519-c90900bc9df0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The eye-catching yellow paint on the car made it impossible to miss, symbolizing a sense of optimism and enthusiasm as it cruised down the road.",
  },
  {
    id: 4,
    name: "Black Car",
    img: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The midnight black car had an aura of mystery and style, making it a symbol of understated luxury and refinement on the road.",
  },
  {
    id: 5,
    name: "White Car",
    img: "https://images.unsplash.com/photo-1612610683796-3b7d3a65df3d?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The pristine white car gleamed under the bright sun, giving it a clean and classic look as it drove through the countryside.",
  },
];

let useForEach = cart.forEach((el) => console.log("Sono l'oggetto " + el.name));
console.log(useForEach);

//Commento: Come possiamo vedere sopra, il forEach sulla variabile "useForEach" restituisce undefined, mentre se specifichiamo all'interno del forEach un console.log itererà eseguendo la condizione specificata per n volte.

let useMap = cart.map((el) => el.description);
console.log(useMap);

//Commento: A differenza del forEach con l'uso del Map, ci ritorna un nuovo array dalla dimensione del precedente, esegue n volte quello che è scritto nella funzione.

// ------
// -------

// #---- Avanzato - Trasformazione e Filtraggio di un Elenco di Numeri-------

const array1 = [3, 6, 9, 12];
const array2 = [5, 10, 15, 20];

// 1. Trasformazione (utilizzando map):

let multforTwo = array1.map((element) => element * 2);

console.log(multforTwo);

let addFive = array2.map((element) => element + 5);
console.log(addFive);

// 2. Filtraggio (utilizzando filter):

// Dal primo array trasformato, filtrare e tenere solo i numeri che sono maggiori di 10.

let numbersGreaterThanTen = multforTwo.filter((element) => element > 10);
console.log(numbersGreaterThanTen);

// Dal secondo array trasformato, filtrare e tenere solo i numeri pari.
let evenNumbers = addFive.filter((number) => number % 2 === 0);
console.log(evenNumbers);
