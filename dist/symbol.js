'use strict';

var _object;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Need for avoid conflicts in properties names
// Generate unique identificators
// work in js inside , but rarely in real projects

// unique symbols
var symbol = Symbol('name'); // $2q43fasdf34
var symbol2 = Symbol('name'); // f7a3ijfha83a

// equals symbols
var symbol3 = Symbol.for('name'); // sawqwfdg3tg
var symbol4 = Symbol.for('name'); // sawqwfdg3tg
console.log(typeof symbol === 'undefined' ? 'undefined' : _typeof(symbol));
console.log(symbol);
console.log(symbol2);
console.log(symbol2 == symbol); //false
console.log(symbol2 === symbol); //false

console.log(symbol3 == symbol4); //true
console.log(symbol3 === symbol4); //true

console.log(Symbol.keyFor(symbol3)); // key of symbol
var object = (_object = {
    1: 'asdf',
    name: 'asdf' }, _defineProperty(_object, 'name', '23221'), _defineProperty(_object, Symbol('password'), 'c3rk'), _defineProperty(_object, Symbol.for('password'), 'fg3g'), _defineProperty(_object, symbol, 'asdfasdfasdf'), _object);

console.log(object);
console.log(object.password); //undefined
console.log(object[Symbol.for('password')]); // 'fg3g'

console.log(Object.keys(object)); //only 1 and name

console.log(Object.getOwnPropertySymbols(object)); // both passwords are here and name

console.log(object[symbol]); //will show 'asdfasdfasdf' value because Symbol() are stored in variable