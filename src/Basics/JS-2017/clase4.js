const name = 'camilo';
const dias = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo'
];

function run(){
    const min = 5;
    const max = 15;
    return Math.round(Math.random() *(max-min)) + min;
}

let totalKms = 0;
const length = dias.length;
for (let i = 0; i < length; i++) {
    const kms = run();
    totalKms += kms;
    console.log(`el dia ${dias[i]} ${name} corrio ${kms} kilometros`);
}

console.log(`el participante ${name} 
corrio ${totalKms} kilometros en total`);

const promedio = totalKms/dias.length;
console.log(`el participante ${name} corrio un promedio de ${promedio.toFixed(2)} kilometros por dia`);



