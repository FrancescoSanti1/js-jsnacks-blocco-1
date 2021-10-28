// Consegna
// 6 - Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

// creo un array vuoto
const listaNumeri = [];

// finché l'array non è composto da 50 numeri, continuo a generare un nuovo numero casuale
while (listaNumeri.length < 50) {
    // genero un numero casuale e mi salvo il valore
    let numero = Math.floor(Math.random() * 200) + 1;
    console.log(numero);

    // creo una variabile per capire se il numero generato è già presente nell'array
    let doppione = false;

    // scorro l'array per confrontare il numero appena generato con tutti i numeri che fanno già parte dell'array
    for (let i = 0; i < listaNumeri.length; i++) {

        // se il numero generato è già presente, modifico la variabile doppione 
        if (numero === listaNumeri[i]) {
            doppione = true;
            console.log("doppione trovato", numero);
        }
    }

    // se la variabile doppione è ancora falsa, significa che il numero non è presente nell'array, quindi lo aggiungo alla lista
    if (!doppione) {
        listaNumeri.push(numero);
    }

}

console.log("array finale:", listaNumeri);