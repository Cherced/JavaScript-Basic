"use strict";

var cabinets = ["100001011", "1110000", "11000000", "11001000", "100001110", "10000101", "1010010", "1110010", "11111100"];

for (var i = 0; i < cabinets.length; i++) {
  var element = cabinets[i];
  console.log(element);
  var lastNum = element.slice(-3); // console.log(lastNum)

  if (lastNum != 100) {
    lastNum = 100;
  }

  var numWithOut = element.slice(0, -3); // console.log(numWithOut);   
  // console.log(lastNum);

  var cabinetsCorrected = numWithOut + lastNum;
  console.log(cabinetsCorrected);
}