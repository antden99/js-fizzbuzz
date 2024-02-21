console.log("tutto ok");

// creo una variabile a cui assegno l'outerHTML ul con l'id list e verifico in console
const listElement=document.getElementById("list");
console.log(listElement);

//creo un ciclo for che stampi i numeri da 0 a 100 in console e nel document
for(let i=1;i<=100;i++){
    console.log(i);
    //listElement.insertAdjacentHTML("beforeend",`<li>${i}</li>`);

    //creo un if che controlla se il numero è un multiplo di 3
    if (i % 3 === 0){
        console.log(i + " è un multiplo 3");
    } else if (i % 5 === 0){
        console.log(i + " è un multiplo 5");
    } 
    // controllo se il numero è un multiplo di 3 e di 5
    if((i % 3 === 0) && (i % 5 === 0)){
        console.log(i + " è un multiplo di 3 e di 5");
    }
}