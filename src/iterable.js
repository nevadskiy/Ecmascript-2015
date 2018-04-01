let test = {
    firstName: 'Galya',
    lastName: 'Husyakova'
}

// Loops
// for (let from = 0, to = text.length) ??? not working here

// test.forEach(element => { the same will throw error
//     console.log(element);
// });

// for (let el in test) { the same will throw error
//     console.log(el);
// }

console.log(test);

let alpha = ['a', 'b', 'c'];

console.log(typeof alpha[Symbol.iterator]) // function

console.log(alpha[Symbol.iterator]); //f values() { [native code] }

// USE ITERATORS
for (let el of alpha) {
    console.log(el);
}

// iterator has method 'next'

let iterator = alpha[Symbol.iterator]();

/*

console.log(iterator); // Array Iterator {}
console.log(iterator.next()); // a, done false
console.log(iterator.next()); // b, done false
console.log(iterator.next()); // c, done false
console.log(iterator.next()); // undefined, done true

console.log(iterator.length); // undefined

*/

let next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}

let idGenerator = {
    [Symbol.iterator]() {
        let id = 1;
        return {
            next() {
                let value = id > 100 ? undefined : id++;
                let done = !value;
                return { value, done }
            }
        }
    }
};

for (let id of idGenerator) {
    // console.log(id); // from 1 to 100
}

let randomGenerator = {

    generate() {
        return this[Symbol.iterator]();
    },

    [Symbol.iterator]() {
        let count = 0;

        return {
            next() {
                let value = Math.ceil(Math.random() * 100);
                let done = count > 10;
                count++;
                return { value, done }
            }
        }
    }
};

// For of iterator
for (let random of randomGenerator) {
    console.log(random);
}

// let random = randomGenerator[Symbol.iterator()]; OR SIMPLER WITH METHOD

let random = randomGenerator.generate(); 

console.log('with next');
console.log(random.next().value);

// while (!next.done) {
//     console.log(next.value);
//     next = iterator.next();
// }

// 14:10...