const nacimiento = new Date(1993, 2-1, 02);
console.log(nacimiento);
const hoy = new Date();
const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
const tiempoTranscurrido = hoy - nacimiento;
console.log(tiempoTranscurrido)
const tiempoSegundos = tiempoTranscurrido/1000
const tiempoMinuttos = tiempoSegundos/60
const tiempoHoras = tiempoMinuttos/60
const tiempoDias = tiempoHoras/24
const tiempoAños = tiempoDias/365
console.log(tiempoDias)
console.log(tiempoAños)

const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
]
console.log(proximo)

console.log(dias[proximo.getDay()])