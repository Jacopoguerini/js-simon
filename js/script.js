/*Descrizione:
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

// variabili
// numero di numeri casuali
var numberList = 5;
var numbersToGuess = [];
var numbersToGuessString;
var randomEnd = 1000;
var time = 5000;

// Funzioni
// funzione per generare numeri casuali
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// funzione per univocità
function arrayPresence(element, list) {
    for (var i = 0; i < list.length; i++) {
        if (element == list[i]) {
            return true;
        }
    }
    return false;
}

// funzione per inserimento di numeri


// Generazione dei numeri
while (numbersToGuess.length < numberList) {
    var number = randomNumber(1, randomEnd);
    
    if (arrayPresence(number, numbersToGuess) == false) {
        numbersToGuess.push(number);
    }
}
console.log("Lista di numeri da ricordare: ", numbersToGuess);


// Alert espone 5 numeri casuali
alert("Ciao!\nPremi invio per far apparire " + numberList + " numeri.\nSe vuoi vincere, ricordali tutti!\nVIA!");

alert("Questi sono i tuoi numeri:\n" + numbersToGuess.toString().replace(/,/g, ", ") + "\nProva a ricordarli tutti!\nPremi invio e hai " + (time / 1000) + " secondi prima di poter testare la tua memoria!");

var attempt = setInterval()