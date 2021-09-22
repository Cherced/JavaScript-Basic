"use strict";

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function ordenar() {
  var array = [];

  for (var i = 0; i < 10; i++) {
    array.push(getRandom(1, 200));
  }

  console.log("array sin arreglar");
  console.log(array);
  array.sort(function (a, b) {
    return a - b;
  });
  console.log("array arreglado");
  console.log(array);
  var ul = document.getElementById("ul");

  for (var _i = 0; _i < array.length; _i++) {
    var li = document.getElementById("li");
    var textLi = document.createTextNode(element);
    li.appendChild(textLi);
    ul.appendChild(li);
  }

  var valores = document.getElementById("valores");
  valores.appendChild(ul);
}

window.onload = ordenar;