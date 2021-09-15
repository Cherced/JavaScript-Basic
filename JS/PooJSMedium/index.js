const juan = {
    name: "juanito",
    age: 18,
    approvedCourses: ["curso 1"], 
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
};

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));
console.log(Object.defineProperty(juan, "pruebaNasa",{
    value: "extaterrestres",
    writable: true,
    enumerable: true, 
    configurable: false,
}))
console.log(Object.getOwnPropertyDescriptors(juan));

// JSON.stringify()
// El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena JSON, reemplazando opcionalmente valores si se especifica una función de reemplazo u opcionalmente incluyendo solo las propiedades especificadas si se especifica una matriz de reemplazo.

// Descripción
// Los objetos Boolean, Number, and String se convierten a sus valores primitivos, de acuerdo con la conversión semántica tradicional.
// Si durante la conversión se encuentra un undefined, una Function, o un Symbol se omite (cuando se encuentra en un objeto) o se censura a null (cuando se encuentra en un array). JSON.stringify() puede devolver undefined cuando se pasan valores “puros” como JSON.stringify(function(){}) o JSON.stringify(undefined).
// Todas las propiedades que utilicen Symbol en los nombres de la clave se ignoran por completo, incluso si utilizan una función replacer.
// Las instancias de Date implementan la función toJSON() devolviendo una cadena de texto (igual que date.toISOString()). Por lo que son tratadas como strings.
// Los números Infinity y NaN, así como el valor null, se consideran null.
// El resto de instancias de Object (incluyendo Map, Set, WeakMap, y WeakSet) sólo tendrán serializadas sus propiedades enumerables.
// JSON.stringify () convierte un valor en notación JSON que lo representa:

// JSON.parse()
// El método JSON.parse() analiza una cadena de texto (string) como JSON, transformando opcionalmente el valor producido por el análisis.

// Why JSON.parse(JSON.stringify()) is a bad practice to clone an object in JavaScript
// Puedes perder tipos de datos.
// JavaScript no te avisara cuando pierdas algún tipo de dato al usar JSON.stringify(), asi que GG mi rey
// Convierte tipos de datos no soportados en soportados, como infinity y NaN en null
// Los tipos de datos Date serán parseados como strings, no como Date
// No es tan rápido y eficiente.

const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
    editA() {
        this.a = 'Abcd'
    }
};

const stringifiedComplexObj = JSON.stringify(obj1);
// "{\"a\":\"a\",\"b\":\"b\",\"c\":{\"d\":\"d\",\"e\":\"e\"},\"f\":[1,\"2\",3]}"

const obj2 = JSON.parse(stringifiedComplexObj); 
// {a: "a", b: "b", c: {d: "d", e: "e"}}

// function recursiva(){
//     if(/*validacion*/){
//       // llamados recursivos
//     } esle {
//       // llamados normales, sin recursividad
//     }
//   }
  
  
  function recursiva(numerito) {
    console.log(numerito);
    if (numerito < 5) {
      return recursiva(numerito + 1);
    } else {
      return 5;
    }
  }
  
  recursiva(0);
  
  function recursiva(numbersArray){
    if (numbersArray.length !== 0) {
      const firstNum = numbersArray[0];
      console.log(`first number: ${firstNum}`);
      numbersArray.shift(); //* elimina el primer elemento del array
      recursiva(numbersArray);
    }
  }
  
  recursiva([9,8,7,6,5,4,3,2,1]);
  recursiva(['😎','🤩','😜','🤑']);

//   Hola! Les comparto mi aporte de como entendi el codigo paso por paso:

// Funcion bucle compleja pero en recursividad.

let array = [1,23,41,52,42,5,656,6,98]
let numeroArray = 0;

let fun = (numerito) => {
    if( numerito < array.length ) {
    let valorArray = array[numerito];
    console.log(valorArray);
    return fun(numerito + 1)
    } else {
        console.log("fin");
    }  
}

let y = fun(numeroArray);
// Deep copy.
//es un algoritmo que toma un tipo de entrada, que puede ser String, Array Objeto o OBJETO CON OBJETOS...

//debemos crear las siguientes ---> la funcion isObjetct y isArray, nos sirve para validar que el tipo de dato que ingresemos es un String o un array, o un objeto con objetos...

function isObject(subject) {
    return typeof subject == "object";
  }
  
  function isArray(subject) {
    return Array.isArray(subject);
  }
//esta es la funcion que nos va permitir generar la copia de los objetos, de cualquier tipo y con cualquier parametro:

  function deepCopy(subject) {
    let copySubject; //tiene una variable que aloja la copia a realizar.
                                                // TIENE LAas constantes con sus respecitivos metodos hechos anteriormente. 
    const subjectIsObject = isObject(subject); 
    const subjectIsArray = isArray(subject);
  
    if (subjectIsArray) {
      copySubject = []; // si es un array debe darse como el mismo tipo
    } else if (subjectIsObject) {
      copySubject = {}; // si es un objeto simple debe concatenarze con {} tipo
    } else {
      return subject; // si no es ninguno de los dos, retorne el input original... char, int doble, float etc, objeto con funciones o lo que sea que hay adentro.
    }
        // ahora ejecutaremos una y otra vez el key, por cada uno de los elementos del objeto
    for (key in subject) {
                                                    //validamos si el keyIsObject es un objeto utilizando nuevamente el objet pero con el key en 
      const keyIsObject = isObject(subject[key]);
        
      if (keyIsObject) {
        copySubject[key] = deepCopy(subject[key]);
      } else {
        if (subjectIsArray) {
          copySubject.push(subject[key]);
        } else {
          copySubject[key] = subject[key];
        }
      }
    }
  
    return copySubject;
  }
  
  const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
      twitter: undefined,
      instagram: undefined,
      facebook: undefined,
    },
  };
  
  const juan = deepCopy(studentBase);
  Object.seal(juan);
  // juan.name = "Juanito";

  // const studentBase = {
//     name: undefined,
//     email: undefined,
//     age: undefined,
//     approvedCourses : undefined,
//     learningPaths: undefined,
//     socialMedia: {
//         twitter: undefined,
//         instagram: undefined,
//         facebook: undefined,
//     }
// };

// const camilo = deepCopy(studentBase);
// console.log(camilo);

// // Object.defineProperty(camilo, "name",{
// //     value: "Camilo",
// //     configurable: false,
// // });
// // console.log(camilo);

// Object.seal(camilo);
// camilo.name = "Camilo Alonso Hernandez Cediel";
// camilo.email = "Chernandezcediel@gmail.com";
// camilo.age = 28;
// camilo.approvedCourses = 85;
// camilo.learningPaths = 30;
// camilo.socialMedia.twitter = "Cherced";
// camilo.socialMedia.instagram = "Cherced";
// camilo.socialMedia.facebook = "Camilo Cediel";
// console.log(camilo);

