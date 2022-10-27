// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function numberChoose(){
    let inputUser = parseInt(prompt("Inserisci un numero da 1 a 5"));
    if (inputUser > 5){
        alert("Inserisci un numero che va da 1 a 5!");
    } else if ( inputUser < 1 ){
        alert("Inserisci un numero che va da 1 a 5!");
    } else {
        document.getElementById("userNumber").innerHTML = inputUser
    }
}

function pcNumber(){
    let pcNumber = Math.floor(Math.random()* 5) +1 ;
    document.getElementById("pcNumber").innerHTML = pcNumber
}

pcNumber();