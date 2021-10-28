// Consegna
// 2- L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// chiedo all'utente la prima parola
const parola1 = prompt("scrivi la prima parola");

// calcolo la lunghezza della prima parola
const lunghezzaParola1 = parola1.length;
console.log(parola1, "è lunga", lunghezzaParola1, "caratteri.");

// chiedo all'utente la secondo parola
const parola2 = prompt("scrivi la seconda parola");

// calcolo la lunghezza della seconda parola
const lunghezzaParola2 = parola2.length;
console.log(parola2, "è lunga", lunghezzaParola2, "caratteri.");

// confronto la lunghezza delle due parole inserite
if (lunghezzaParola1 <= lunghezzaParola2) {
    // se la prima è più corta della seconda, la stampo per prima
    // non essendoci indicazioni in merito, ho deciso di gestire qui anche il caso in cui le due parole siano lunghe uguali, stampando comunque la prima inserita come prima parola
    console.log("prima parola:", parola1);
    console.log("seconda parola:", parola2);
} else {
    // se la seconda parola è più corta della prima, la stampo per prima
    console.log("prima parola:", parola2);
    console.log("seconda parola:", parola1);
}