// Default value
function greet(greeting, name = 'Bill') {
  console.log(`${greeting} ${name}`);
}
greet('Hi');

// Dynamic variables
function sum() {
  console.log(arguments);
}

sum(1, 2, 3);