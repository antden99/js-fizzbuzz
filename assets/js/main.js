console.log("tutto ok");

// creo una variabile a cui assegno l'outerHTML ul con l'id list e verifico in console
const listElement=document.getElementById("list");
console.log(listElement);

//creo un ciclo for che stampi i numeri da 0 a 100 in console e nel document
for(let i=1;i<=100;i++){
    console.log(i);
    //creo una variabile valore a cui assegno i
    let valore = i;
    let classe = "box";
    
    //creo un if che controlla se il numero è un multiplo di 3
    if (i % 3 === 0){
        console.log(i + " è un multiplo 3");
        valore = "fizz";
        classe = "fizz";
    } //controllo se il numero è multiplo di 5
    
    else if (i % 5 === 0){
        console.log(i + " è un multiplo 5");
        valore = "buzz";
        classe = "buzz";
    } 
    // controllo se il numero è un multiplo di 3 e di 5
    if((i % 3 === 0) && (i % 5 === 0)){
        console.log(i + " è un multiplo di 3 e di 5");
        valore = "fizzbuzz";
        classe = "fizzbuzz";
    }

    /*stampo nel documento un <li> per volta a cui cambio la classe ed il valore all'interno se 
    vengono rispettati determinati requisiti */
    listElement.insertAdjacentHTML("beforeend",`<li class="${classe}">${valore}</li>`);
}