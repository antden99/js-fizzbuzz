console.log("tutto ok");


const container = document.getElementById("container");
console.log(container);

const ul = document.createElement("ul");
container.append(ul);
console.log(ul);

for(let i=1; i<=100 ; i++){
    let elementList = document.createElement("li");
    ul.append(elementList);
    elementList.innerHTML = `${i}`
}