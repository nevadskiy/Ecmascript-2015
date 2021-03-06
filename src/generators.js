function* generator() {
    console.log('start');
    yield 1; //stop on this line
    console.log('finish');
    yield 2;
    yield 3;
}

console.log(typeof generator);
let iterator = generator(); 

console.log(iterator.next()); //after yield, done false
console.log(iterator.next()); //done: true
console.log(iterator.next()); //done: true

function generate() {
    let current = 1;
    console.log('start');
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    let result = { value: undefined, done: true}
    
                    if (current <= 3) {
                        result.value = current;
                        result.done = false;
                        current++;
                    } else {
                        result.value = undefined;
                        result.done = true;
                        console.log('finish');
                    }
    
                    return result;
                }
            }
        } 
    }
}

generate()[Symbol.iterator]();


// Range function
function* range(start, end) {
    let current = start;
    while (current <= end) {
        yield current++;
    }
}

for (let num of range(1, 10)) {
    console.log(num);
}


// Also as method generator the same
let numbers = {
    *range(start, end) {
        let current = start;
        while (current <= end) {
            yield current++;
        }
    }
}

for (let num of numbers.range(1, 10)) {
    console.log(num);
}

// Part 2

/**
 * Declaration
 */
function *generator() {

}

/**
 * Anonymous generator declaration
 */
let generation = function*() {}

/**
 * Object method
 */
let obj = {
    *generator() {

    }
}
class Something {
    *generator() {

    }
}
/////
function *generating() {
    let result = 1 + (yield);
    console.log(`Result: ${result}`)
    yield 1; //make pause and return 1
    yield 2; //again pause and return 2
}

iterator = generating();
console.log(iterator.next(1)); //first restart
console.log(iterator.next(1)); //second restart
console.log(iterator.next()); //done true now