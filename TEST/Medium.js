let cabinets = ["100001011","1110000","11000000","11001000","100001110","10000101","1010010","1110010","11111100"];
let cabinets1 = ["100001011","1110000","11000000","11001000","100001110","10000101","1010010","1110010","11111100","100001011","1110000","11000000","11001000","100001110","10000101","1010010","1110010","11111100"];
let cabinets2 = ["10000asd11","1110000","110asd00","11001000","1000asd10","10000101","1010010","1110010","11111100"];
function itsBinaryCode(cabinets) {
    let filter = /[01]+/;
    let binaryChecker = new RegExp(filter);
    let firstFilterCabinnet = []
    for (let i = 0; i < cabinets.length; i++) {
        let element = cabinets[i];
        if (binaryChecker.test(element)) {
           firstFilterCabinnet.push(element);
        } else {
           element = "";
           firstFilterCabinnet.push(element);
        }
    }
    return firstFilterCabinnet;
}

let quepaso = itsBinaryCode(cabinets2);
console.log(quepaso);

function cabinetChecker(cabinet) {
    let cabinetsCorrected = [];
    let numWithOut
    let lastNum
    let binaryCode = itsBinaryCode(cabinet);
    if (binaryCode.length <= 9) {
        for (let i = 0; i < binaryCode.length; i++) {
            const element = binaryCode[i];
            lastNum = element.slice(-3);
            if (lastNum != 100) {
                lastNum = 100;
                numWithOut = element.slice(0, -3);
                corrected = numWithOut + lastNum;
                cabinetsCorrected.push(corrected); 
            } else {
                cabinetsCorrected.push("");    
            }        
        }     
    return cabinetsCorrected; 
    } else {
        return ""
    }
           
}

let prueba1 = cabinetChecker(cabinets);
let prueba2 = cabinetChecker(cabinets1);
let prueba3 = cabinetChecker(cabinets2);
console.log("este es el viejo cabbinet " + cabinets);
console.log("este es el nuevo cabbinet1 " + prueba1);
console.log("este es el nuevo cabbinet2 " + prueba2);
console.log("este es el nuevo cabbinet3 " + prueba3);
