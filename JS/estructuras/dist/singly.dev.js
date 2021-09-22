"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// 0 --> 1 -- > 2 -- > 3-- > 4-- > 5 -- > 6 --> null
0; // let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// };

var Node = function Node(value) {
  _classCallCheck(this, Node);

  this.value = value;
  this.next = null;
};

var MySinglyLinkedList =
/*#__PURE__*/
function () {
  function MySinglyLinkedList(value) {
    _classCallCheck(this, MySinglyLinkedList);

    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  _createClass(MySinglyLinkedList, [{
    key: "append",
    value: function append(value) {
      var newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  }, {
    key: "prepend",
    value: function prepend(value) {
      var newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  }, {
    key: "insert",
    value: function insert(index, value) {
      if (index >= this.length) {
        return this.append(value);
      }

      var newNode = new Node(value);
      var firstPointer = this.getTheIndex(index - 1);
      var holdingPointer = firstPointer.next;
      firstPointer.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this;
    }
  }, {
    key: "getTheIndex",
    value: function getTheIndex(index) {
      var counter = 0;
      var currentNode = this.head;

      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }

      return currentNode;
    }
  }]);

  return MySinglyLinkedList;
}();

var myLinkedList = new MySinglyLinkedList(1);