/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

-il prezzo del biglietto è definito in base ai km(0.21 € al km)
    - va applicato uno sconto del 20 % per i minorenni
        - va applicato uno sconto del 40 % per gli over 65.

L'output del prezzo finale va messo fuori in forma umana - con massimo due decimali, per indicare centesimi sul prezzo.
Questo richiederà un minimo di ricerca.
Il risultato andrà visualizzato in un apposito elemento < p > del  codice HTML.*/

'use strict'

const prezzoKm = 0.21;
const scontoMin = 20;
const scontMag = 40;
const minorenni = 18;
const over = 65;

const numeroKm = parseInt(prompt('Numero chilometri che si vogliono percorrere'));
const eta = parseInt(prompt('età passeggero'));

console.log(numeroKm);
console.log(eta);



if (!isNaN(numeroKm) && !isNaN(eta)) {
    let prezzoTot = numeroKm * prezzoKm;
    console.log(prezzoTot);

    if (eta < minorenni) {
        prezzoTot -= (prezzoTot * scontoMin) / 100;
    } else if (eta > over) {
        prezzoTot -= (prezzoTot * scontMag) / 100;

    }
    console.log(prezzoTot.toFixed(2));

    document.getElementById('risultato-finale').innerHTML = `Il Valore totale del tuo biglietto è di ${prezzoTot.toFixed(2)}€`;
} else {
    console.log('I dati non sono validi');

    document.getElementById('risultato-finale').innerHTML = `I dati inseriti non sono validi`;
}