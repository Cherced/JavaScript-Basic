// codigo del cuadrado:
console.group('Cuadrados')
const sideSquare = 5;
console.log(`Los lados del cuadrado miden ${sideSquare} cmts.`);
const perimeterSquare = sideSquare*4;
console.log(`El perimetro de el cuadrado mide ${perimeterSquare} cmts.`);
let exponentSquare = 2;
const areaSquare = sideSquare **exponentSquare;
console.log(`El area de el cuadrado es ${areaSquare} cmts.`);
console.groupEnd('fin cuadrados');

// pasando todo a funciones:
function perimeterSquareF(sideSquare) {
    return `El perimetro del cuadrado es de `+ (sideSquare*4) + ' cmts' ;
}
console.log(perimeterSquareF(5));
function areaSquareF(sideSquare) {
    return `El area de el cuadrado es de `+ (Math.pow(sideSquare, 2)) + ' cmts' ;
}
console.log(areaSquareF(5));
// termina funciones del cuadrado.

//codigo triangulo:
//parametros:
console.group('Triangulos');
const side1Triangle = 6;
const side2Triangle = 6;
const baseTriangle = 4;
const heigthTriangle = 5.5;
console.log(`Los lados del triangulo miden:
Por el lado1 : ${side1Triangle} cmts, 
Por el lado2 mide : ${side2Triangle} cmts, 
En por su base mide ${baseTriangle} cmts.`);
const perimeterTriangle = side1Triangle + side2Triangle + baseTriangle;
console.log(`El perimetro de el triangulo mide ${perimeterTriangle} cmts.`);
const areaTriangle = (baseTriangle * heigthTriangle)/2;
console.log(`El area de el triangulo es ${areaTriangle} cmts.`);
console.log('Funciones');
function perimeterTriangleF(side1Triangle , side2Triangle, baseTriangle) {
    return 'El perimetro del triangulo es de: ' +(side1Triangle + side2Triangle + baseTriangle) + ' cmts';
}
console.log(perimeterTriangleF(side1Triangle,side2Triangle,baseTriangle));
function areaTringleF(baseTriangle, heigthTriangle) {
    return 'El area del triangulo es de ' + baseTriangle*heigthTriangle + 'cmts';
}
console.log(areaTringleF(baseTriangle, heigthTriangle));
console.groupEnd();
//Fin triangulos

//codigo circulos:
//parametros:
console.group("Circulos");
const radixCircle = 4;
console.log(`El radio del circulo es de ${radixCircle} cmts`);
const diameterCircle = radixCircle*2;
console.log(`el diametro del circulo es de ${diameterCircle} cmts`);
const pi = Math.PI;
const perimeterCircle = diameterCircle*pi;
const areaCircle = (radixCircle *radixCircle) *pi;
console.log(`el area del circulo es de ${areaCircle} cmts
el perimetro del circulo es de ${perimeterCircle} cmts.`)
//funciones
console.log(`funciones`)
function diameterCircleF(radixCircle) {
    return 'El diametro de el circulo es de: '+(radixCircle*2)+ ' cmts';
}
console.log(diameterCircleF(radixCircle));

function AreaCircleF(radixCircle) {
    const piiii = Math.PI;
    return 'El area del circulo es de : '+ ((radixCircle *radixCircle)*piiii)+ ' cmts';
}
console.log(AreaCircleF(radixCircle));
console.groupEnd();
function perimeterCircleF(radixCircle) {
    const piiii = Math.PI;
    return `El perimetro del circulo es de : ` + ((radixCircle*2)*piiii) + ' cmts';
}
console.log(perimeterCircleF(radixCircle));

//a futuro debo pasarlas a arrowFunctions.


