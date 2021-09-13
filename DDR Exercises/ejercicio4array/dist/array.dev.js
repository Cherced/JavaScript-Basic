"use strict";

nombres = [];

function insertarNombre(evt) {
  evt.preventDefault();
  var nombre = document.getElementById("nombre").value;

  if (nombre == "") {
    alert("el nombre no puede estar vacio");
  } else if (!existeNombre(nombre)) {
    var opcion = "<li> " + nombre + "</li>";
    var lista = document.getElementById("lista-nombres");
    lista.innerHTML += opcion;
    nombres.push(nombre);
    alert("Se incerto el nombre");
  } else {
    alert("Se incerto el nombre");
  }
}

function existeNombre(nombre) {
  var nombreEncontrado = nombres.find(function (element) {
    return element.trim().toLowerCase() === nombre.trim().toLowerCase();
  });

  if (nombreEncontrado) {
    return true;
  } else {
    return false;
  }
}