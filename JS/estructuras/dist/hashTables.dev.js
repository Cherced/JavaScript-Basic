"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HashTable =
/*#__PURE__*/
function () {
  function HashTable(size) {
    _classCallCheck(this, HashTable);

    this.data = new Array(size);
  }

  _createClass(HashTable, [{
    key: "hashMethod",
    value: function hashMethod(key) {
      var hash = 0;

      for (var i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }

      return hash;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var address = this.hashMethod(key);

      if (!this.data[address]) {
        this.data[address] = [];
      }

      this.data[address].push([key, value]);
      return this.data;
    }
  }]);

  return HashTable;
}();

var myHashTable = new HashTable(50);