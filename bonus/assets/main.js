console.log("tutto ok");


const container = document.getElementById("container");
console.log(container);

const ul = document.createElement("ul");
container.append(ul);
console.log(ul);

for (let i = 1; i <= 100; i++) {
    let elementList = document.createElement("li");
    ul.append(elementList);

    let valore=i
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log(i + " è un multiplo di 3 e di 5");
        valore = "fizzbuzz";
        classe = "fizzbuzz";
    }
    //creo un else if che controlla se il numero è un multiplo di 3
    else if (i % 3 === 0) {
        console.log(i + " è un multiplo 3");
        valore = "fizz";
        classe = "fizz";
    } //controllo se il numero è multiplo di 5

    else if (i % 5 === 0) {
        console.log(i + " è un multiplo 5");
        valore = "buzz";
        classe = "buzz";
    }
    elementList.innerHTML = `${valore}`
    elementList.style.color="black";
    elementList.style.backgroundColor="red";
    elementList.style.borderRadius="10px";
    elementList.style.textAlign="center";

}