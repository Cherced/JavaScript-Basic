//antes de es6:
console.log ("el area de un triangulo de base 5 y altura 7 es de: " + 5*7/2);
// con es6:
console.log (`el area de un triangulo de base 5 y altura 7 es de:  ${5*7/2}`);
// funcion para calcular triangulos
let base = 5;
let heigth = 7;
console.log(`el area de un triangulo de base ${base} y altura ${heigth} es de:  ${base*heigth/2}`);

function calcTriangle(base, heigth) {
    return base*heigth/2;
}
console.log(`el area de un triangulo de base 
${base} y altura ${heigth} es de:  ${calcTriangle(base, heigth)}`);

// funcion en variable

let triangleArea = function (base, heigth) {
    return base*heigth/2 
}
//arrow function:
let triangleArea =(base, heigth) => base*heigth/2;

console.log(`probando el funcionamiento de arrow ~${triangleArea(base, heigth)}`);

//clase 2 vamos hacer un ejercicio con condicionales: mirar el .js de clase 2

