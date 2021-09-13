function descountCalc(price , descount) {
    const priceNew = price - (price*(descount/100));
    return  priceNew;
}

function calcDescount() {
    const input = document.getElementById("price");
    const value = input.value;

    const input2 = document.getElementById("descount");
    const value2 = input2.value;

    const response = descountCalc(Number.parseFloat(value), Number.parseFloat(value2));
    const resultP = document.getElementById("ResultP");
    resultP.innerHTML = `el precio de tu articulo con el descuento es de: 
    ${response}`;
}