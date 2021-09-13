//operador de resposo, puede extraer propiedades de un objeto que aun no se ha creado.

const obj = {
    name: 'camilo',
    age: 32,
    country : 'cOlOmBiA'
};

//ahora usaremos el operador de reposo, para separar los elementos:

let {name, ...all} = obj;
console.log(name, all); // camilo { age: 32, country: 'cOlOmBiA' } ES EL RESULTADO  
console.log(all); // { age: 32, country: 'cOlOmBiA' } ES EL RESULTADO  

// utilizando las propiedades de propagacion podremos crear uno dos o tres o mas objetos :

const obj = {
    name: 'camilo',
    age: 32,
    country : 'cOlOmBiA'
};

const obj1 = {
    ...obj,
    country : 'mexico'
}

console.log(obj1);

// otra caracteristica es promies, segun el caso

const helloWorld = () => {
    return new Promise((resolve, recject) => {
        (true)
        ? resolve ('hello world')
        : recject(new Error ('test error'))
    });
};

helloWorld();
    // then(response => console.log(response))  
    // catch(error => console.log(error))
    // finally(() => console.log('finalizo'))