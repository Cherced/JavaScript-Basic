"use strict";

var letters = ['a', 'b', 'c'];

for (var index = 0; index < letters.length; index++) {
  var element = letters[index];
  console.log('for', element);
}

letters.forEach(function (item) {
  return console.log('forEach', item);
});