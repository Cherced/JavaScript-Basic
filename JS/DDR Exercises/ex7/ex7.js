function getRandomInt(a,b) {
    return Math.round(Math.random() * (a - b)) + b
}

function numAletorios() {
    let elements = document.getElementById("elements")
    let generatorr = ""
    for (let i = 0; i < 10 ;i++){
        generatorr += "<option>" + getRandomInt(0,100) + "</option>";
    }

    elements.innerHTML = generatorr;
}