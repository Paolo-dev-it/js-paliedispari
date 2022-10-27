// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function wordInput (word1) {

    let input = prompt("Inserisci una parola");
    let wordReverse = " ";

    for (let i = input.length - 1; i >= 0; i-- ){

        wordReverse += input[i]; 

    }
    console.log( `${wordReverse}` );
    
}

wordInput ( "input" );