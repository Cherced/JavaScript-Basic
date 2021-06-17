// //parametros por defectos version aintuga y version con es6

// //antigua:
// function newFunction(name, age, country) {
//     var name = name || 'oscar';
//     var age = age || 32;
//     var country = country || 'mex';
//     console.log (name,age,country);
// }

// newFunction();

// // es6:
// function newFunction2 (name = 'oscar', age = '32', country="MX" ) {
//     console.log (name ,age, country);
// };

// newFunction2();
// newFunction2('ricardo', '30', 'CO' );

// // se optimiza y se emplea mucho menos codigo.

// //los template literals tambien cambiaron:

// //antigua:
// let hello = "hello";
// let world = "World";
// let epicPhrase = hello + ' ' + world ;
// console.log(epicPhrase);
// //es6:
// let epicPhrase2 = `${hello} ${world}`; 
// console.log(epicPhrase2);

// //la nueva forma de concatenar strings

// let lorem = "hola mis muchachos esto es una frase para concatenar con otra \n"
//                 + "otro texto para que concatene!";
// console.log(lorem);
// //es6
// let lorem2 = `FRASE EPICA
// esto se fue de otra phrase epica`;
// console.log(lorem2);

// // destructuracion de elementos:

// //antigua

// let person = {
//     'name':'oscar',
//     'age':'32',
//     'country':'MX'
// }

// console.log (person.name, person.age);
// //es6:

// let { name, age, country} = person;
// console.log(name,age,country);

// //ejemplo en objetos

// let team1 = ['oscar', 'juan', 'carlos'];
// let team2 = ['valeria','yesica', 'camila'];

// let education = ['david', ...team1, ...team2];
// console.log(education);
// //var es global //let es local.
// // hablemos de scope const no tiene socpe global pero si tiene en function, en block, pero no puede ser reassignada.
// // let, no tiene global scope, si tiene en la funcion y en blokes de codigo, y si puede ser reasignada.
// // var tiene glopbal funcion y reasignacion pero no se lee dentro de un bloke de codigo espesifico

// {
//     var globalVar = "Global var";
// }

// {
//     let globalLet = "Global Let";
//     console.log(globalLet); //se deja acceder
// }

// console.log(globalVar);
// console.log(globalLet); //no se deja acceder

// //ejemplos de constante:

// const a = 'b';
// a = 'a';
// // no deja remplazar. y tiene scope global y local. 

let name = 'oscar';
let age = 32;
//es5 
obj = { name: name, age: age};
//es6
obj2 = {name ,age}; 

console.log(obj2);

let listOfNames = names.map(function(item){
    console.log(item.name);
})











