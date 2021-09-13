// //1:
// console.log(`Hola Mundo!!!`); //debi usar document.wirthe
// // correccion:
// document.write('HOLA MUNDO!!!'); // la diferencia es que esta, envia el mensaje a el page o html, y la console, usa la consola, y el alert, es una ventana en el navegador.
// //2:
// let total = () => { //debi usar una funcion comun.. y no describi bien las variables, e
//     total = 3+3
// };
// console.log(total);
// //correccion:
// function sumarNumeros() {
//     let num1 = 3;
//     let num2 = 4;

//     document.write(num1+num2);
// };
// //3:
// var mensaje = `SOY YOOOOOO!`; // hice demas!!! pero estoy bien
// console.log(mensaje);
//4:
function muestraOpcion() {
    var opciones = document.getElementsByName("eleccion");
    console.log(opciones);
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            alert(opciones[i].value);    
        }
    }
}

