// Consegna
// 3 - Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// dichiaro la variabile che mi darà la somma finale
let somma = 0;

// apro un ciclo in cui ripeto per dieci volte le seguenti istruzioni:
for (let i = 1; i <= 10; i++) {
    // - chiedo all'utente di inserire un numero
    // - salvo il numero in una variabile
    const numeroInserito = parseInt(prompt("inserisci un numero"));

    // - aggiungo il numero inserito al totale contenuto nella variabile finale che esprimerà la somma totale
    somma += numeroInserito;
}

// stampo la somma totale
console.log("La somma totale è", somma);