/*Descrizione:
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

// variabili
// numero di numeri casuali
var numberList = 5;
// array dei numeri casuali
var numbersToGuess = [];
// arrai numeri giocatore
var playerNumbers = [];
var randomEnd = 1000;
// tempo di attesa in secondi
var waitingTime = 2;
var score = 0;
var correctList = [];

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

// funzione per avere il tempo in millesimi di secondo
function milliSecond(time) {
    return time * 1000;
}

// funzione di GIOCO: inserimento numeri da parte dell'utente
function getUserNumbers() {
    for (var i = 0; i < numberList; i++) {
        var num = parseInt(prompt("Inserisci qui un numero che ti ricordi di quelli visti poco fa:"));
        playerNumbers.push(num);

        // verifica dei numeri e aumento punteggio
        if (arrayPresence(num, numbersToGuess)) {
            correctList.push(num);
            score++;
        }
    }
}

// Funzione che espone i risultati finali
function result() {
    switch (score) {
        case  numberList:
            alert("Complimenti, hai indovinato tutti i numeri!\nHai una memoria di ferro!");
        break;

        case 0:
            alert("Oh no, non hai indovinato nessun numero!\nI numeri apparsi all'inizio erano questi: " + numbersToGuess.toString().replace(/,/g, ", ") + ".\nRiprova!");
        break;

        default:
            alert("Complimenti, hai indovinato: " + score + " numeri su " + numberList.toString().replace(/,/g, ", ") + "!\nI numeri che hai indovinato sono: " + correctList.toString().replace(/,/g, ", ") + ".\nPuoi fare di meglio! Riprova!");
            break;
    }
}

// Generazione dei numeri da visualizzare
while (numbersToGuess.length < numberList) {
    var number = randomNumber(1, randomEnd);
    
    if (arrayPresence(number, numbersToGuess) == false) {
        numbersToGuess.push(number);
    }
}
console.log("Lista di numeri da ricordare: ", numbersToGuess);

// Alert espone 5 numeri casuali
alert("Ciao!\nPremi invio per far apparire " + numberList + " numeri.\nSe vuoi vincere, ricordali tutti!\nVIA!");

alert("Questi sono i tuoi numeri:\n" + numbersToGuess.toString().replace(/,/g, ", ") + "\nProva a ricordarli tutti!\nPremi invio e hai " + waitingTime + " secondi prima di poter testare la tua memoria!");

document.getElementById("countdown").innerHTML = "<p>" + waitingTime + "</p>"

// Countdown 
var countDown = setInterval( function() {
    
    if (waitingTime == -1) {
        clearInterval(countDown);
        document.getElementById("countdown").innerHTML = "<p>Via!</p>"
    } else {
        waitingTime--;
    }
}, milliSecond(waitingTime));

//Gioco
var attempts = setTimeout( function() {
    // inserimento numeri da parte dell'utente
    getUserNumbers();
    // risultato finale
    result();

}, milliSecond(waitingTime));
