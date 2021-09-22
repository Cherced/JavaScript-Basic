"use strict";

// //ejercicio1:
// let a = 5;
// let b = 4;
// console.log(`
// la suma de ${a} + ${b} es ${a+b}
// la resta de ${a} - ${b} es ${a-b}
// la multiplicacion de ${a} * ${b} es ${a*b}
// la division de ${a} / ${b} es ${a/b}
// `);
// //ejercicio2:
// if (a<b) {
//     console.log(`el valor de a: ${a} es menor que el de b: ${b}`);
// } else if (a === b) {
//     console.log(`el valor de a: ${a} igual que el de b: ${b}`);
// } else {
//     console.log(`el valor de a: ${a} es mayor que el de b: ${b}`);
// }
// //ejercicio3:
// const nombre = "Camilo Alonso Hernandez Cediel"
// console.log("bienvenido " + nombre);
// //ejercicio4:
// const nombrePrompt;
// nombrePrompt = window.prompt("Cual es tu nombre?");
// document.write("bienvenido " + nombrePrompt)
console.log('javascript es tremendo');

function saludar(nombre) {
  console.log("hola ".concat(nombre));
}

saludar("camilo");
setTimeout(function () {
  console.log("este texto aprecera 5 segudnos despues");
}, 5000);
console.log("fin");