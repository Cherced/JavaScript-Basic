//cuadrado:
function perimeterSquare(sideSquare) {
    return (sideSquare*4) 
    
}


function areaSquare(sideSquare) {
    return (Math.pow(sideSquare, 2));
}

function calcPerimeterSquare() {
    const input = document.getElementById("inputSquare");
    const value = input.value;
    
    const perimeter = perimeterSquare(Number.parseFloat(value));
    alert(`El perimetro de el cuadrado es de ${perimeter} Cmts`);
}

function calcAreaSquare() {
    const input = document.getElementById("inputSquare");
    const value = input.value;

    const area = areaSquare(Number.parseFloat(value));
    alert(`El area de el cuadrado es de ${area} Cmts`);
}
//triangulo:

function perimeterTriangle(side1Triangle , side2Triangle, baseTriangle) {
    return side1Triangle + side2Triangle + baseTriangle;
}

function areaTriangle(baseTriangle, heigthTriangle) {
    return  (baseTriangle*heigthTriangle)/2;
}

function calcPerimeterTriangle() {
    const input1 = document.getElementById("side1Triangle");
    const value1 = input1?.value;


    const input2 = document.getElementById("side2Triangle");
    const value2 = input2?.value;

    const input3 = document.getElementById("baseTriangle");
    const value3 = input3?.value;

    const perimeterT = perimeterTriangle(Number.parseFloat(value1) , Number.parseFloat(value2), Number.parseFloat(value3));
    console.log(perimeterT);
    alert(`El perimetro del triangulo es de: ${perimeterT} cmts`);

}

function calcAreaTriangle() {
    const input1 = document.getElementById("baseTriangle");
    const value1 = input1?.value;

    const input2 = document.getElementById("heigthTriangle");
    const value2 = input2?.value;

    const areaT = areaTriangle(Number.parseFloat(value1) , Number.parseFloat(value2) );
    alert(`El area del triangulo es de: ${areaT} cmts`);

}

//circulo:
function diameterCircle(radixCircle) {
    return (radixCircle*2);
}

function perimeterCircle(radixCircle) {
    const piiii = Math.PI;
    return ((radixCircle*2)*piiii);
}
function areaCircle(radixCircle) {
    const piiii = Math.PI;
    return ((radixCircle *radixCircle)*piiii);
}

function calcDiameterCircle() {
    const input = document.getElementById("radix");
    const value = input.value;

    const diameter = diameterCircle(Number.parseFloat(value));
    alert(`El diametro del circulo es de: ${diameter} cmts`);
}

function calcPerimeterCircle() {
    const input = document.getElementById("radix");
    const value = input.value;

    const perimeter = perimeterCircle(Number.parseFloat(value));
    alert(`El perimetro del circulo es de: ${perimeter} cmts`);
}

function calcAreaCircle() {
    const input = document.getElementById("radix");
    const value = input.value;

    const diameter = areaCircle(Number.parseFloat(value));
    alert(`El area del circulo es de: ${diameter} cmts`);
}