"use strict";

// ejercicio1
var array = [];

for (var i = 0; i < 10; i++) {
  array.push(i);
}

console.log(array); // ejercicio2

function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var arrayAleatorio = [];

for (var _i = 1; _i <= 10; _i++) {
  arrayAleatorio.push(getRandom(100, 1));
}

console.log(arrayAleatorio); // ejercicio3

var arraycopy = arrayAleatorio.slice(0, 10);
console.log("original");
console.log(arrayAleatorio);
console.log("copia");
console.log(arraycopy); // ejercicio4

function validadorEdad(edad) {
  var edadLegal = 18;

  if (edad < edadLegal) {
    return console.log("es menor de edad");
  } else {
    return console.log("es mayor de edad");
  }
}

validadorEdad(35); // ejercicio5

function validadorNota(nota) {
  if (nota < 3) {
    return console.log("su nota es DEFICIENTEEEEE");
  } else if (nota > 3 && nota < 5) {
    return console.log("su nota es insuficiente");
  } else if (nota > 5 && nota < 6) {
    return console.log("su nota es suficiente");
  } else if (nota > 6 && nota <= 9) {
    return console.log("su nota es notable");
  }

  console.log("eso no es una notaª!");
}

validadorNota(9);

function is_my_number_prime(input) {
  // validamos que el numero no sea negativo 0, o 1, ya que estos por regla no son primos.
  if (Number.isInteger(input)) {
    if (input <= 1) {
      return "El numero " + input + " No es primo";
    } else {
      counter = 0; // dividimos el input en 2 , y validamos que esta sea === 0 y cada que se haga match en la operacion se tiene un suamndo en el counter.
      //emepzamos en 2 por que anteriormente ya validamos negativos 0 y 1.

      for (var _i2 = 2; _i2 < input / 2; _i2++) {
        if (input % _i2 === 0) {
          counter++;
        }
      } // si counter tiene mas de 1 sabremos que no es primo y si solo da 1 sabremos que es primo


      if (counter < 1) {
        return "El numero " + input + " Es primo";
      } else {
        return "El numero " + input + " No es primo";
      }
    }
  } else {
    return "El numero " + input + " No es primo";
  }
}

function print(callback) {
  return console.dir(callback);
}

print(is_my_number_prime(5));
is_my_number_prime(6);
is_my_number_prime(7);
is_my_number_prime(53);
is_my_number_prime(1);
is_my_number_prime(2);
is_my_number_prime("hasd");
is_my_number_prime(9344);