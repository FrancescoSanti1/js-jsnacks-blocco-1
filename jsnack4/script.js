// Consegna
// 4 - In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby.
// Chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// creo un array con la lista degli invitati alla festa
const listaInvitati = ["Pietro", "Sara", "Simone", "Anna", "Giovanni", "Lucia"];
console.log(listaInvitati);

// chiedo all'utente di inserire il suo nome
const nomeUtente = prompt("come ti chiami?");

let invitoPresente = false;

// scorro la lista degli invitati
for (let i = 0; i < listaInvitati.length; i++) {

    // se il suo nome compare nella lista, mi appunto l'informazione
    if (nomeUtente === listaInvitati[i]) {
        invitoPresente = true;
    }
}

// alla fine, se è tra gli invitati, glielo comunico
if (invitoPresente === true) {
    console.log("Ottimo, il tuo nome risulta nella lista degli invitati.");
} else {
    // altrimenti gli dico che non è invitato
    console.log("Ci dispiace, il tuo nome non risulta in lista");
}