//clases en ecmas, y la herencia de objetos.

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sumar(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }

}

const calc = new calculator();
console.log(calc.sumar(2,2));

//trabajar con modulos.
const hello = require('./module');
console.log(hello());

// generators, son funciones espciales que retornan una serie de valores egun el algoritmo definido:

function* helloWorld() {
    if (true) {
        yield 'hello, ';
    }
    if (true) {
        yield 'World';
    }
};
// se ejecuta generando un const, se forma el valor de constante y se llama el generator

const generatorHello = helloWorld();
//ahora podemos utilizar el valor next, que me va permitir ejecutar la primer logica, y cuando lo vuelva a ejecutar el va regresar el siguiete valor de next algo asi :
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);