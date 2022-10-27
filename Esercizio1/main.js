// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function wordInput (word1) {

    let input = prompt("Inserisci una parola");
    let wordReverse = " ";
    let wordCorrect = " ";

    for (let i = input.length - 1; i >= 0; i-- ){

        wordReverse += input[i]; 

    }
    console.log( `${wordReverse}` );

    for ( let x = 0; x < input.length; x++ ){

        wordCorrect += input[x];
        
    }
    console.log( `${wordCorrect}` );

    if ( wordReverse == wordCorrect ) {
        document.getElementById("text").innerHTML = `La parola ${input} è palindroma` 
    } else {
        document.getElementById("text").innerHTML = `La parola ${input} non è palindroma` 
    }
}

wordInput ( "input" );