let cabinets = ["100001011","1110000","11000000","11001000","100001110","10000101","1010010","1110010","11111100"];
function itsBinaryCode(cabinets) {
    let filter = /^[01]+$/;
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
function cabinetChecker(cabinet) {
    let cabinetsCorrected = [];
    let numWithOut
    let lastNum
    let binaryCode = itsBinaryCode(cabinet);
    if (binaryCode.length <= 9) {
        for (let i = 0; i < binaryCode.length; i++) {
            let element = binaryCode[i];
            if ((element === "") || (element === null)) {
                element = "";
            } else {
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
        }     
   
    } else {
        return ""
    }
    return cabinetsCorrected;        
}

function print (input){
	console.log(input);
}

print(cabinetChecker(cabinets));
