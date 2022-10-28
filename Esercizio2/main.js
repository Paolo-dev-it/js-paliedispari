// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


    let inputUser = (prompt("Inserisci pari o dispari!"));

    let inputNumber = addUser();
    console.log(`${inputNumber} è il numero scelto dall'utente`);

    let randomNumberPc = pcNumber();
    console.log(`${randomNumberPc} è il numero del pc!`);

    let somma = sum(inputNumber, randomNumberPc);
    console.log(`La somma tra i due numeri è : ${somma}` );

    let checkEvenOdd = evenOdd();
    console.log(`Il risultato è : ${checkEvenOdd}`);


    function addUser(){

      let inputUser = parseInt(prompt("Inserisci un numero da 1 a 5!"));
      if (inputUser > 5){
        alert("Inserisci un numero che va da 1 a 5!");
    } else if ( inputUser < 1 ){
        alert("Inserisci un numero che va da 1 a 5!");
    } else {
        document.getElementById("userNumber").innerHTML = inputUser
    }
        return inputUser
    }

    function pcNumber(){

        let pcNumber = Math.floor(Math.random()* 5) + 1 ;
        // console.log(inputUser);
        document.getElementById("pcNumber").innerHTML = pcNumber

        return pcNumber  
    }

    function sum(x,y){
        let sum = x + y;
        return sum;
    }

    function evenOdd(){ //Funzione somma
         let check = "";
            if (somma % 2 == 0){
                check = "pari";
                return check;
            } else {
                check = "dispari"
                return check;
            }    
    }

            if ( inputUser == checkEvenOdd ){
                console.log("hai vinto");   
            }else {
                console.log("hai perso");
                }
            
        