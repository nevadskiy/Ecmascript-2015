'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Greating
function greet(name) {
  console.log(('Hello ' + name).toUpperCase());
}
greet('Bill');

// Mailing with template (new lines and spaces
function createEmail(to, from, subject, message) {
  console.log('\n    To: ' + to + '\n    From: ' + from + '\n    Subject: ' + subject + '\n    Message: ' + message + '\n  ');
}
createEmail('john@email.com', 'jane@mail.com', 'Hello', 'How are you doing?');

// Statements
function add(x, y) {
  console.log(x + ' + ' + y + ' = ' + parseInt(x + y));
}
add('5', '7');

// Uppering
var name = 'Bill';
console.log(upperName(_templateObject, name));

function upperName(literals) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return literals[0] + values[0].toUpperCase();
}