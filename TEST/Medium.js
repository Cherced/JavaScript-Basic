let cabinets = ["100001011","1110000","11000000","11001000","100001110","10000101","1010010","1110010","11111100"];
// for (let i = 0; i < cabinets.length; i++) {
//     const element = cabinets[i];
//     console.log(element);
//     let lastNum = element.slice(-3);
//     // console.log(lastNum)
//     if (lastNum != 100) {
//         lastNum = 100;
//     }
//     let numWithOut = element.slice(0, -3);
//     // console.log(numWithOut);   
//     // console.log(lastNum);
//     let cabinetsCorrected = numWithOut+lastNum;
//     console.log(cabinetsCorrected);
// }
function cabinetChecker(cabinet) {
    // if (condition) {
        for (let i = 0; i < cabinet.length; i++) {
            const element = cabinet[i];
            let lastNum = element.slice(-3);
            if (lastNum != 100) {
                lastNum = 100;
            }
            numWithOut = element.slice(0, -3);
            let Corrected = numWithOut + lastNum;
            let cabinetsCorrected = [];
            cabinetsCorrected.push(Corrected); 
        }
                 
    // }else {

    // }
    
}

let prueba1 = cabinetChecker(cabinets);
console.log(cabinets);
console.log("este es el nuevo cabbinet " + prueba1);
