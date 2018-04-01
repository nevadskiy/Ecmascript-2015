// Need for avoid conflicts in properties names
// Generate unique identificators
// work in js inside , but rarely in real projects

// unique symbols
let symbol = Symbol('name'); // $2q43fasdf34
let symbol2 = Symbol('name'); // f7a3ijfha83a

// equals symbols
let symbol3 = Symbol.for('name'); // sawqwfdg3tg
let symbol4 = Symbol.for('name'); // sawqwfdg3tg
console.log(typeof symbol);
console.log(symbol);
console.log(symbol2);
console.log(symbol2 == symbol); //false
console.log(symbol2 === symbol); //false

console.log(symbol3 == symbol4); //true
console.log(symbol3 === symbol4); //true

console.log(Symbol.keyFor(symbol3)); // key of symbol
let object =  {
    1: 'asdf',
    name: 'asdf', //will be overrided
    name: '23221',
    [Symbol('password')]: 'c3rk', //this one will stay here but not visible
    [Symbol.for('password')]: 'fg3g',
    [symbol]: 'asdfasdfasdf'
}

console.log(object);
console.log(object.password); //undefined
console.log(object[Symbol.for('password')]); // 'fg3g'

console.log(Object.keys(object)); //only 1 and name

console.log(Object.getOwnPropertySymbols(object)); // both passwords are here and name

console.log(object[symbol]); //will show 'asdfasdfasdf' value because Symbol() are stored in variable