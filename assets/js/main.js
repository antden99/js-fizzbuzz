console.log("tutto ok");

// creo una variabile a cui assegno l'outerHTML ul con l'id list e verifico in console
const listElement=document.getElementById("list");
console.log(listElement);

//creo un ciclo for che stampi i numeri da 0 a 100 in console e nel document
for(let i=0;i<=100;i++){
    console.log(i);
    listElement.insertAdjacentHTML("beforeend",`<li>${i}</li>`);
}