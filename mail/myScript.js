//Mail
//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.


var emailUtente = prompt("Scrivi il tuo indirizzo email");

var insiemeIscritti = ["giulia@gmail.com", "b@gmail.com", "c@gmail.com", "d@gmail.com", "e@gmail.com"];
console.log(insiemeIscritti);

//ciclo per  controllare se esite dentro la lista un elemento uguale a quello che ha inserito l'utente  

var elementExist = false

for (var i = 0; i < insiemeIscritti.length; i++) {

    var numeroIscritto = insiemeIscritti[i]

    if (numeroIscritto === emailUtente) {
       elementExist = true  
    }
}

if (elementExist) {
    console.log("la tua email è nel sistema");
    document.getElementById("iscritto").innerHTML = emailUtente + " hai confermato la tua iscrizione";
}else {
    console.log("la tua email non esiste nel sistema");
    alert("la tua email non è presente nel nostro sistema");
}

