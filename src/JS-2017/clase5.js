let vidaGoku = 100;
let vidaVegueta = 100;

const MIN_POWER= 6;
const MAX_POWER= 12;

let round = 0;

const ambosSiguenVivos = () =>  vidaGoku > 0 && vidaVegueta > 0;
const calcularGolpe = () => Math.round(Math.random() *(MAX_POWER-MIN_POWER)) + MIN_POWER;
const gokuSigueVivo = () => vidaGoku > 0;

while (ambosSiguenVivos()) {
    round++;
        console.log(`Round ${round}`);
        const golpeGoku = calcularGolpe();
        const golpeVegueta = calcularGolpe();
        if (golpeGoku>golpeVegueta) {
            console.log(`Goku Ataca a Vegueta con un golpe de ${golpeGoku} pts`);
            vidaVegueta -= golpeGoku;
            console.log(`la vida de Vegueta ahora es de ${vidaVegueta} pts`);
        } else if (golpeGoku==golpeVegueta) {
            console.log(`Un combate igualado, goku golpea al tiempo que vegueta y ambos salen disparados! increible.`);
        } else {
            console.log(`Vegueta Ataca a goku con un golpe de ${golpeVegueta} pts`);
            vidaGoku -= golpeVegueta;
            console.log(`la vida de Goku ahora es de ${vidaGoku} pts`);
        }
}
    if (gokuSigueVivo()) {
        console.log(`El ganador es Goku!!!`);
    } else {
        console.log(`El ganador es Vegueta!!!`);
    }

