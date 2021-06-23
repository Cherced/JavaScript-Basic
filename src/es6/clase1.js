//parametros por defecto antes de ecmas6+

function newFunction(name , age, country) {
    var name = name || 'Oscar'
    var age = age || '33'
    var country = country || 'MEX'
    console.log(name,age,country);
}

//con ecmas6, se añadio una forma para establexerlo desde la asginacion de parametros:

function newfunction2(name = 'oscar', age = 32, country = 'MEX') {
    console.log(name, age, country);    
}
newFunction();
newfunction2('Ricardo', '37', 'CO');

//template literals, permite separar o unir varios elementos si es el caso.

let hello = "hello";
let world = "world";
let epicPhrase = hello +' '+ world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`; // asi se llaman las variables dentro de los templates literals. asi concatenamos y hasta con enters
console.log(epicPhrase2);

