"use strict";

var juan = {
  name: "juanito",
  age: 18,
  approvedCourses: ["curso 1"],
  addCourse: function addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
};
console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));
console.log(Object.defineProperty(juan, "pruebaNasa", {
  value: "extaterrestres",
  writable: true,
  enumerable: true,
  configurable: false
}));
console.log(Object.getOwnPropertyDescriptors(juan));
var obj1 = {
  a: "a",
  b: "b"
};
var obj2 = {};

for (prop in obj1) {
  obj2[prop] = obj1[prop];
}

console.log(obj2);