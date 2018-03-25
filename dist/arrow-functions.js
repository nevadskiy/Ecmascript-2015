'use strict';

(function () {
  return console.log('loaded module');
})();

var square = function square(x) {
  return x * x;
};
console.log(square(4));

var getName = function getName() {
  return { name: 'John' };
};

console.log(getName());