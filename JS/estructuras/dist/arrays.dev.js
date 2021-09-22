"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// metodos de arrays en JS
// para adicion y substraccion:
// push: agrega un elemento al final del array
// pop: borra el ultimo elemento del array
// unshift: agrega unj elemento al inicio del arrays
// shift: borra el primer elemento del array
// splice: agrega un elemento en una parte del arrays
// hay dos tipos de arrays, dinamicos y estaticos, y js los arranca dinamicos... sin limite de espacio en almacenamiento.
// array estatico : array = [1, 2, 3]; dinamico : array = [] siempre si pedimos 6 da mas, serian 12 si se llega al 13 serian 23 meas y asi. 
var array = ["camilo", "cardo", "amaaaaa"];

var MyArray =
/*#__PURE__*/
function () {
  // creamos un constructor, en este ingresamos el tamaño inicial, y el tipo de dato que es un objeto
  function MyArray() {
    _classCallCheck(this, MyArray);

    this.length = 0;
    this.data = {};
  } // tomamos con get, el dato de entrada que va ser el indice de una lista.


  _createClass(MyArray, [{
    key: "get",
    value: function get(index) {
      return this.data[index];
    }
  }, {
    key: "push",
    // creamos metodo de empuje PUSH
    value: function push(item) {
      // decimos que en el objeto data, en la posicion que existe de length, ingrese el item;
      this.data[this.length] = item; // sume ese tiem y cree una nueva posicion en el array

      this.length++; // finalmente retorne el dato

      return this.data;
    }
  }, {
    key: "unshift",
    value: function unshift(item) {
      for (var i = this.length; i > 0; i--) {
        this.data[i] = this.data[i - 1];
      }

      this.data[0] = item;
      this.length++;
      return this.data;
    }
  }, {
    key: "pop",
    value: function pop() {
      var lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return "deleted " + lastItem;
    }
  }, {
    key: "delete",
    value: function _delete(index) {
      var item = this.data[index];
      this.shiftIndex(index);
      return item;
    }
  }, {
    key: "shift",
    value: function shift() {
      return this["delete"](0);
    }
  }, {
    key: "shiftIndex",
    value: function shiftIndex(index) {
      for (var i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }

      delete this.data[this.length - 1];
      this.length--;
    }
  }]);

  return MyArray;
}();

var myArray = new MyArray();