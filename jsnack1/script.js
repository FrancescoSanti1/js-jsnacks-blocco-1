// Consegna
// 1 - L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// chiedo all'utente il primo numero
const numero1 = parseInt(prompt("Inserisci il primo numero"));
console.log("primo numero:", numero1);

// chiedo all'utente il secondo numero
const numero2 = parseInt(prompt("Inserisci il secondo numero"));
console.log("secondo numero:", numero2);

// confronto i due numeri inseriti
if (numero1 > numero2) {
    // se il primo è maggiore, lo stampo
    console.log("Il maggiore tra i due numeri è", numero1);
} else if (numero2 > numero1) {
    // se il secondo è maggiore, lo stampo
    console.log("Il maggiore tra i due numeri è", numero2);
} else {
    // altrimenti segnalo che i due numeri inseriti sono uguali
    console.log("I due numeri inseriti sono uguali");
}