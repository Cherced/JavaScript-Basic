//multilinea en los strings, antes de ecmas6+:

let lorem = " Earum vero excepturi mollitia doloribus temporibus quaerat? \n Eius optio doloremque dolor dicta quis perferendis aspernatur nihil pariatur laudantium maxime, porro laborum nisi"; // asi se hacia multilinea.
console.log(lorem)

//ahora con ecmas6+:

let lorem2 = ` Earum vero excepturi mollitia doloribus temporibus quaerat?
 Eius optio doloremque dolor dicta quis perferendis aspernatur nihil pariatur laudantium maxime, 
 porro laborum nisi.`; //usando template literals " `` ", ya no usamos mas que enter y listo se hace.
 console.log(lorem2);

 // destructuracion de elementos:

 let person = { // estas son variables de tipo objeto.
     'name': 'oscar', // se define como propiedad, y luego valor de propiedad.
     'age': 32,
     'country': 'Mex',
 }
 console.log(person.name, person.age, person.country);

//ahora con ecmas6+, podemos destructurar de la siguienta manera:
let { name, age, country} = person;
console.log(name,age,country);

// uso de arreglos, y identacion de elementos:
let team1 = ['jesus','maira','joseph'];
let team2 = ['pedro','pablo','jasinto'];

//uso de operador de propagacion para traer elementos y unirlos en uno mismo:
let education = ['jose', ...team1 , ...team2];
console.log(education);
// esto nos ayuda a no copiar y pegar, y mejora la sintaxis.

//otro ejemplo particular, es el uso de let, para usar el scope donde va ser llamado, y no global:

{
    var globalVar= 'Global Var'; // var funciona en todo el scope.
}

{
    let globalLet = 'Global Let'; // let solo funciona dentro de este bloque de codigo.
    console.log(globalLet);// aqui si se accede a let.
}

console.log(globalVar);
console.log(globalLet);//aqui no se accede a let.

const a = b;
console.log(a); // se deja asignar
a = 'a'; // no se deja asignar solo tiene una sola vez su asignacion es una Constante.
console.log(a); // da error.

