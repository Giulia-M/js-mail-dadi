//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


var giocatoreUmano = Math.floor(Math.random() * 6) + 1;
console.log("il giocatore umano lancia il dado ed ha come risultato: " + giocatoreUmano);

var computer = Math.floor(Math.random() * 6) + 1;
console.log("il computer lancia il dado ed ha come risultato: " + computer);


if (giocatoreUmano > computer ) {
    console.log("giocatore umano vince")
} else if (giocatoreUmano === computer) {
    console.log("nessuno dei due vince")

} else {
    console.log("hai perso")
}
