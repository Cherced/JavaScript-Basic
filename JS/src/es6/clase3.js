// propiedad de objetos mejorada ejemplo :

let name = 'Camilo';
let age = 28;
obj = {name: name, age: age}; // asi se creaba un objeto ates de Ecmas6+.

obj2 = {name, age,}; // asi es con el ecmas6+, ya no se necesita definir atributo y valor solo atributo.

console.log(obj);
console.log('ricardo', 37);

// las arrow function, se hacen para mejorar sintaxis (reducida). y para manejar un disk no vinculable.

const names = [ //arreglo de objetos.
    {name: 'Oscar', age : 32},
    {name: 'Camilo', age: 28}
];

//para iterar por cada uno de los elementos usamos MAP. en una funcion anonima, para recorar el array de objetos.
let listOfNames = names.map(function (item) {
    console.log(item.name);
});
// se hace ahora con ecmas6+ de la siguienta manera.
//una arrow function, es una funcion anonima mejorada de sintaxis.
let listOfNames2 = names.map(item => console.log(item.name));
// con este => se indica que es una funcion anonima, y que va retornar algo, se dinamiza el codigo para ejecutar en una linea.
// otra FORMA  de arrow function es :
const listOfNames3 = (name, age) => {

}
// otra forma es:
const listOfNames4 = name => {

}
// la anteriror es si solo se busca un parametro. 
//ultima forma:
const square = num => num*num; // es una funcion anonima que recibe un numero lo multiplica y lo devuelve. numero por numero es cuadrado deñ numero!!!
//diferencias para todo es que ya no usamos return, ni llaves, ni rigides ni codigo extra es algo mas simple. 

//otro metodo, es las promesas, para trabajar con el asincronizmo. este lenguaje no es sicronico, se ejecuta segun la accion, esto repara problemas en los callbakcs, que van en los json.
// sintaxis de generar una promesa.

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('hey!');
        } else {
            reject('Ups!');
        }
    })
}
// las promesas solucionan las ejecuciones de procesos o tareas, en simultaneo, ya que el lenguaje es asincrono de caracteristica, entonces podra, hacer una promesa cuando un evento pase, y no antes de que este se active.

//y se ejecuta asi:
// inciamos la funcion:
helloPromise()
    .then(Response => console.log(Response)) // para llamar respuesta de la promesa se usa el anteriror 
    .catch(error => console.log(error)); // para llamar el error, es la sintaxis anterior.



