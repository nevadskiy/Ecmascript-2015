'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

var person = {
  firstname: firstname, lastName: lastName, email: email,
  sayHello: function sayHello() {
    console.log('Hi my name is ' + this.firstname + ' ' + this.lastName);
  }
};

console.log(person);

// Property as a variable
person.firstname;
person['firstName'];
// ES6:
var property = 'firstName';
person[property];
person = _defineProperty({}, property, 'Bill');