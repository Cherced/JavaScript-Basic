"use strict";

// //Escriba un programa de JavaScript para mostrar el día y la hora actuales en el siguiente formato: "Hoy es : Lunes."
// let today = new Date();
// console.log(today);
// let day = today.getDay();
// let daylist = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves ", "Viernes", "Sabado"];
// console.log(`hoy es ${daylist[day]}.`);
// console.log("Hoy es : " + daylist[day] + ".");
// // Eºscriba una función de JavaScript para imprimir el contenido de la ventana actual.
// function printSomthing(string) {
//     console.log(string);
// }
// printSomthing("Hola Mundo");
// // escribir un texto y devolverlo con prompts
// var text = prompt("Hola Mundo Prompt");
// console.log(text);
// // ejemplo prompt
// function alerta() 
// {
// var mensaje;
// var opcion = prompt("Introduzca su nombre:", "Aner Barrena");
// if (opcion == null || opcion == "") {
//         mensaje = "Has cancelado o introducido el nombre vacío";
//         } else {
//             mensaje = "Hola " + opcion;
//             }
//             document.getElementById("ejemplo").innerHTML = mensaje;
// }
// Uso del typeof
// var num = 343;
// console.log("num " + typeof(num));
// num = "dsdasdsadsad";
// console.log("num " + typeof(num));
// num = 34445;
// console.log("num " + typeof(num));
// // Dividir un numero de documento por puntos
// var dni = "35.180.980";
// var split = dni.split('.');
// console.log(split);
//Convertir un texto a mayusculas o minusculas.
function transformCaseInverter(text) {
  if (text === text.toLowerCase()) {
    var mayus = text.toUpperCase();
    console.log(mayus);
  } else if (text === text.toUpperCase()) {
    var min = text.toLowerCase();
    console.log(min);
  } else {
    console.log("eso es un numero");
  }
}

transformCaseInverter("HOLA");