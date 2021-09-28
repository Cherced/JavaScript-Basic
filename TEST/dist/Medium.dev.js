"use strict";

var cabinets = ["100001011", "1110000", "11000000", "11001000", "100001110", "10000101", "1010010", "1110010", "11111100"];

function itsBinaryCode(cabinets) {
  var filter = /^[01]+$/;
  var binaryChecker = new RegExp(filter);
  var firstFilterCabinnet = [];

  for (var i = 0; i < cabinets.length; i++) {
    var element = cabinets[i];

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
  var cabinetsCorrected = [];
  var numWithOut;
  var lastNum;
  var binaryCode = itsBinaryCode(cabinet);

  if (binaryCode.length <= 9) {
    for (var i = 0; i < binaryCode.length; i++) {
      var element = binaryCode[i];

      if (element === "" || element === null) {
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
    return "";
  }

  return cabinetsCorrected;
}

function print(input) {
  console.log(input);
}

print(cabinetChecker(cabinets));