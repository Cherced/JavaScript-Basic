// Números Primos (Algoritmos Básicos)
// Los números primos son aquellos que solo resultan divisibles por sí mismos y por la unidad. Los que pueden dividirse por otros números, se denominan compuestos (por ejemplo el 9 que además de dividirse por 9 y por 1, también puede dividirse exactamente por 3). Fueron ya conocidos en la antigüedad por la civilización griega, habiendo sido usados por Euclides, quien demostró que poseen la particularidad de ser infintos. El número 1 no integra ninguna de las dos categorías, por convención, a partir del siglo XX, y por supuesto solo es divisible por sí mismo al ser él mismo la unidad.Para efectos de este ejercicio, el número 1 deberá retornar "NO_ES_PRIMO"
// Ejercicio
// Dado como entrada un numero entero Retornar "PRIMO" si el numero es primo o "NO_ES_PRIMO" si el numero no es primo o no es un numero
// Entrada:	Salida:
// 5	PRIMO
// 6	NO_ES_PRIMO
// 7	PRIMO
// 53	PRIMO
// 1	NO_ES_PRIMO
// 2	PRIMO
// Text	NO_ES_PRIMO
// 9343	PRIMO
// 9344	NO_ES_PRIMO
// 9973	PRIMO

function isPrime (input) {
    let counter = 0; 
    if (Number.isInteger(input)) {
        if (input<=1) {
        return console.log("NO_ES_PRIMO");    
        } else {
            for (let i = 2; i < input/2; i++) {
               if (input % i === 0) {
                   counter++;
               }      
            }
            if (counter < 1) {
                return console.log("ES_PRIMO");
               } else {
                return console.log("NO_ES_PRIMO");
               }          
        }   
    } else {
        return console.log("Ingresa Solo Numeros");
    }
}

isPrime(5);
isPrime(6);
isPrime(7);
isPrime(53);
isPrime(1);
isPrime("oeeeee");
isPrime(9343);
isPrime(9234);


