function getRandom(min, max) {
    return Math.floor(Math.random()* (max - min) + min);
}

function ordenar() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(getRandom(1,200));        
    }
    console.log("array sin arreglar");
    console.log(array);

    array.sort((a,b) => a - b);
    console.log("array arreglado");
    console.log(array);

    let ul = document.getElementById("ul");
    for (let i = 0; i < array.length; i++) {
        let li = document.getElementById("li");
        let textLi = document.createTextNode(element);
        li.appendChild(textLi);
        ul.appendChild(li);
    }
    let valores = document.getElementById("valores");
    valores.appendChild(ul);
}
window.onload = ordenar; 