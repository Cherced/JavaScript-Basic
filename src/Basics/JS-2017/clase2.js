let starWars7 = 'Star Wars: El Despertar de la Fuerza';
const pgStarWars7 = 13;

const nameSacha = 'Sacha';
const ageSacha = 26;

const nameSanti = 'Santi';
const ageSanti = 12;

function canWatchStarWars7(name, age, isWithAdult = false) {
    if (age >= pgStarWars7) {
        alert(`${name} Puede ingresar a ver ${starWars7}`);
    } else if (isWithAdult){
        alert(`${name} no cumple la edad para ingresar, sin embargo esta acompañado de un responsable por lo tanto puede ingresar a ver ${starWars7}`);
    } else {
        alert(`${name} No puede ingresar a ver ${starWars7} tiene ${age} años y el requisito minimo para la pelicula es de ${pgStarWars7} años de edad`);
    }
}

canWatchStarWars7(nameSacha,ageSacha);
canWatchStarWars7(nameSanti,ageSanti, true);
