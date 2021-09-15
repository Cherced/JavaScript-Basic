"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isObject(subject) {
  return _typeof(subject) == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  var copySubject;
  var subjectIsObject = isObject(subject);
  var subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    var keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

function createStudent() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      name = _ref.name,
      age = _ref.age,
      email = _ref.email,
      _ref$approvedCourses = _ref.approvedCourses,
      approvedCourses = _ref$approvedCourses === void 0 ? [] : _ref$approvedCourses,
      _ref$learningPaths = _ref.learningPaths,
      learningPaths = _ref$learningPaths === void 0 ? [] : _ref$learningPaths,
      twitter = _ref.twitter,
      instagram = _ref.instagram,
      facebook = _ref.facebook;

  return {
    name: name,
    age: age,
    email: email,
    approvedCourses: approvedCourses,
    learningPaths: learningPaths,
    socialMedia: {
      twitter: twitter,
      instagram: instagram,
      facebook: facebook
    }
  };
}

createStudent();