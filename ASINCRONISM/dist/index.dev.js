"use strict";

var somethingWillHappend = function somethingWillHappend() {
  return new Promise(function (resolve, reject) {
    if (true) {
      resolve("heeey");
    } else {
      reject("sorry");
    }
  });
};

somethingWillHappend().then(function (response) {
  return console.log(response);
})["catch"](function (err) {
  return console.error(err);
});

var somethingWillHappend2 = function somethingWillHappend2() {
  return new Promise(function (resolve, reject) {
    if (true) {
      setTimeout(function () {
        resolve("true");
      }, 2000);
    } else {
      var error = new Error('whooops!');
      reject(error);
    }
  });
};

somethingWillHappend2().then(function (response) {
  return console.log(response);
})["catch"](function (err) {
  return console.log(err);
});
Promise.all([somethingWillHappend(), somethingWillHappend2()]).then(function (response) {
  console.log('array of results', response);
})["catch"](function (err) {
  console.log(err);
});