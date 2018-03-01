'use strict';

// Default value
function greet(greeting) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Bill';

  console.log(greeting + ' ' + name);
}
greet('Hi');

// Dynamic variables
function sum() {
  console.log(arguments);
}

sum(1, 2, 3);