// # Esercizio 1

//     Sulla base della lezione del giorno, scrivere una funzione che simuli il comportamento di un termometro. Prende un
//     solo argomento che rappresenta i gradi e restituisce uno dei seguenti valori: `caldo` - `freddo` - `mite`.

function getTemperatureStatus(degree) {
  if (degree <= 14) {
    return "Freddo";
  } else if (degree >= 15 && degree <= 25) {
    return "Mite";
  } else {
    return "Caldo";
  }
}

console.log(getTemperatureStatus(26));

// Creare un oggetto che vi identifichi come persona, inserite quindi almeno 5 proprietà e
// 1 metodo al suo interno. Andate ad eseguire l'esecuzione del metodo all'interno del programma

const objMyself = {
  name: "Federica",
  surname: "Iuvara",
  gender: "female",
  hobbies: ["design", "art", "books"],
  IsAnExerciseForDevCourse: true,
  hello: function () {
    return "Hello! My name is Federica";
  },
};

console.log(objMyself.hello());

// # Esercizio Avanzato - Gestore di preferiti

// 1. Creare un array vuoto chiamato preferiti.

const preferiti = [];

// 2. Scrivere una funzione aggiungiAPreferiti che prende una stringa come parametro (che rappresenta l'oggetto del
// preferito, come il titolo di un film) e aggiunge quell'elemento all'array preferiti.

function aggiungiAPreferiti(str) {
  preferiti.push(str);
}

aggiungiAPreferiti("Lorem Ipsum 1");
aggiungiAPreferiti("Lorem Ipsum 2");
aggiungiAPreferiti("Lorem Ipsum 3");
aggiungiAPreferiti("Divina Commedia");

// 3. Scrivere una funzione mostraPreferiti che stampa tutti gli elementi nell'array preferiti.

function mostraPreferiti() {
  for (let i = 0; i < preferiti.length; i++) {
    console.log(preferiti[i]);
  }
}

mostraPreferiti();

// 4. Scrivere una funzione rimuoviDaPreferiti che prende una stringa come parametro e rimuove quell'elemento
// dall'array preferiti, se esiste.

function rimuoviDaPreferiti(str) {
  for (let i = 0; i < preferiti.length; i++) {
    if (preferiti[i] === str) {
      return preferiti.splice(i, 1);
    }
  }
}

rimuoviDaPreferiti("Divina Commedia");
mostraPreferiti();
