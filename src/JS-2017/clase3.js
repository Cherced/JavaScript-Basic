// regla 1 : si la palabra termina con ar, se le quitan esas dos letras. programas = program
// regla 2 : si la palabra inicia con z se le añade pe al final, ejemplo zorro = zorrope, si es zarpar = por regla 1 y dos seria zarppe.
// regla 3 : si la palabra traducida tiene 10 o mas letras se debe partir en dos por la mitad y unir con un guion al medio abecedario = abece-dario.
// regla 4 : si la palabra original es un palindromo, niguna regla anterior cuenta, y se devuelve la misma palabra, pero intercambiando letras mayusculas y minusculas sometemos= SoMeTeMoS.
function platzom(str) {

    let translation = str;
    const reverse = (str) => str.split('').reverse().join('');

    function minMay(str) {
        const length = str.length;
        let translation = '';
        let capitalize = true;
        for (let i = 0; i < length; i++) {
            const char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }
        return translation;
    }
    

    if (str == reverse(str)) {
        return minMay(str);
    }

    // regla 1 : si la palabra termina con ar, se le quitan esas dos letras. programas = program
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0,-2);
        
    } // regla 2 : si la palabra inicia con z se le añade pe al final, ejemplo zorro = zorrope, si es zarpar = por regla 1 y dos seria zarppe.  
    if (str.toLowerCase().startsWith('z')) {
        translation+= 'pe';
    }
    // regla 3 : si la palabra traducida tiene 10 o mas letras se debe partir en dos por la mitad y unir con un guion al medio abecedario = abece-dario.
    const length = translation.length;
    if (length >= 10) {
        const firsthalf = translation.slice(0, Math.round(length/2));
        const secondhalf = translation.slice(Math.round(length/2));
        translation = `${firsthalf}-${secondhalf}`;
    }
    // regla 4 : si la palabra original es un palindromo, niguna regla anterior cuenta, y se devuelve la misma palabra, pero intercambiando letras mayusculas y minusculas sometemos= SoMeTeMoS.
    
    return translation;
}

console.log(platzom("programar"));
console.log(platzom("zorro"));
console.log(platzom("zarpar"));
console.log(platzom("abecedario"));
console.log(platzom("sometemos"));

