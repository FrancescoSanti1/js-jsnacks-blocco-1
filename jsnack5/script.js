// Consegna
// 5 - Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// creo l'array vuoto
const numeriDispari = [];

// creo un ciclo che per sei volte esegue le seguenti istruzioni:
for (let i = 0; i < 6; i++) {
    // - chiedo all'utente di inserire un numero
    let numero = parseInt(prompt("inserisci un numero"));

    // - se il numero inserito è dispari, lo inserisco nell'array
    if (numero % 2) {
        numeriDispari.push(numero);
    }
}

// stampo l'array finale
console.log("array finale:", numeriDispari);