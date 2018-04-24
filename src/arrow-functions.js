(() => console.log('loaded module'))();

let square = x => x * x;
console.log(square(4));

let getName = () => ({name: 'John'});

console.log(getName());