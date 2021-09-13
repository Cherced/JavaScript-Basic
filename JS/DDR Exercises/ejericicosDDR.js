// ejercicio1
let array = [];
for (let i = 0; i < 10; i++) {
    array.push(i);
}
console.log(array);
// ejercicio2
function getRandom(max , min) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let arrayAleatorio = [];
for (let i = 1; i <=10 ;i++) {
    arrayAleatorio.push(getRandom(100 , 1));
}
console.log(arrayAleatorio);
// ejercicio3
let arraycopy = arrayAleatorio.slice(0,10);
console.log("original");
console.log(arrayAleatorio);
console.log("copia");
console.log(arraycopy);
// ejercicio4
function validadorEdad(edad) {
    const edadLegal = 18;
    if (edad < edadLegal) {
    return console.log("es menor de edad");
    } else {
    return console.log("es mayor de edad");
    }
}
validadorEdad(35);
// ejercicio5
function validadorNota(nota) {
    if (nota < 3) {
        return console.log("su nota es DEFICIENTEEEEE");
    } else if (nota > 3 && nota < 5) {  
        return console.log("su nota es insuficiente");
    } else if (nota > 5 && nota < 6) {  
        return console.log("su nota es suficiente");
    } else if (nota > 6 &&  nota <= 9) {  
        return console.log("su nota es notable");}

        console.log("eso no es una notaª!")
}
validadorNota(9);


function is_my_number_prime(input)
    {
    	// validamos que el numero no sea negativo 0, o 1, ya que estos por regla no son primos.
    	if (Number.isInteger(input)){
    		if (input <= 1){
    		console.log("El numero "+ input + " No es primo");
    	} else {
    		counter = 0;
    		// dividimos el input en 2 , y validamos que esta sea === 0 y cada que se haga match en la operacion se tiene un suamndo en el counter.
    		//emepzamos en 2 por que anteriormente ya validamos negativos 0 y 1.
    		for(let i = 2; i < input/2; i++){
    			if (input % i === 0){
    				counter++;
    			}
    		}
    		// si counter tiene mas de 1 sabremos que no es primo y si solo da 1 sabremos que es primo
    		if(counter <1){
    			console.log("El numero "+ input + " Es primo");
    		} else {
    			console.log("El numero "+ input + " No es primo");
    		}
    	}
    
    	
    } else {
    		console.log("El numero "+ input + " No es primo");
    	}
    }    	
    is_my_number_prime(5);
	is_my_number_prime(6);
	is_my_number_prime(7);
	is_my_number_prime(53);
	is_my_number_prime(1);
	is_my_number_prime(2);
    is_my_number_prime("hasd")
    is_my_number_prime(9344)
