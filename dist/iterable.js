'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var test = {
    firstName: 'Galya',
    lastName: 'Husyakova'

    // Loops
    // for (let from = 0, to = text.length) ??? not working here

    // test.forEach(element => { the same will throw error
    //     console.log(element);
    // });

    // for (let el in test) { the same will throw error
    //     console.log(el);
    // }

};console.log(test);

var alpha = ['a', 'b', 'c'];

console.log(_typeof(alpha[Symbol.iterator])); // function

console.log(alpha[Symbol.iterator]); //f values() { [native code] }

// USE ITERATORS
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = alpha[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var el = _step.value;

        console.log(el);
    }

    // iterator has method 'next'
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var iterator = alpha[Symbol.iterator]();

/*

console.log(iterator); // Array Iterator {}
console.log(iterator.next()); // a, done false
console.log(iterator.next()); // b, done false
console.log(iterator.next()); // c, done false
console.log(iterator.next()); // undefined, done true

console.log(iterator.length); // undefined

*/

var next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}

var idGenerator = _defineProperty({}, Symbol.iterator, function () {
    var id = 1;
    return {
        next: function next() {
            var value = id > 100 ? undefined : id++;
            var done = !value;
            return { value: value, done: done };
        }
    };
});

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = idGenerator[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        // console.log(id); // from 1 to 100

        var id = _step2.value;
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var randomGenerator = _defineProperty({
    generate: function generate() {
        return this[Symbol.iterator]();
    }
}, Symbol.iterator, function () {
    var count = 0;

    return {
        next: function next() {
            var value = Math.ceil(Math.random() * 100);
            var done = count > 10;
            count++;
            return { value: value, done: done };
        }
    };
});

// For of iterator
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = randomGenerator[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _random = _step3.value;

        console.log(_random);
    }

    // let random = randomGenerator[Symbol.iterator()]; OR SIMPLER WITH METHOD
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var random = randomGenerator.generate();

console.log('with next');
console.log(random.next().value);

// while (!next.done) {
//     console.log(next.value);
//     next = iterator.next();
// }

// CLASS ITERATOR
// Pattern iterator (works with wile item.done true)

var ArrayIterator = function () {
    function ArrayIterator(array) {
        _classCallCheck(this, ArrayIterator);

        // this.array = array;

        //map need for immuting original array because map returns new array
        this.array = array.map(function (item) {
            return item;
        }).sort();
        this.index = 0;
    }

    _createClass(ArrayIterator, [{
        key: 'next',
        value: function next() {
            var result = { value: undefined, done: true };

            if (this.index < this.array.length) {
                result.value = this.array[this.index];
                result.done = false;
                this.index++;
            }

            return result;
        }
    }]);

    return ArrayIterator;
}(); // should be on top due to class not hoisting


var TaskList = function () {
    function TaskList() {
        _classCallCheck(this, TaskList);

        this.tasks = [];
    }

    _createClass(TaskList, [{
        key: 'addTasks',
        value: function addTasks() {
            for (var _len = arguments.length, tasks = Array(_len), _key = 0; _key < _len; _key++) {
                tasks[_key] = arguments[_key];
            }

            this.tasks = this.tasks.concat(tasks);
        }
    }, {
        key: Symbol.iterator,
        value: function value() {
            return new ArrayIterator(this.tasks);

            // let tasks = this.tasks;
            // let index = 0;

            // return {
            //     next() {
            //         let result = {value: undefined, done: true }

            //         if (index < tasks.length) {
            //             result.value = tasks[index];
            //             result.done = false;
            //             index++;
            //         }

            //         return result;
            //     }
            // }
        } // If comment method iterator, let .. of .. loop will not work with error Symbol.iterator is not a function

    }]);

    return TaskList;
}();

var taskList = new TaskList();
taskList.addTasks('Learn ES', 'Learn ES6');

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
    for (var _iterator4 = taskList[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var task = _step4.value;

        console.log(task);
    }
} catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
        }
    } finally {
        if (_didIteratorError4) {
            throw _iteratorError4;
        }
    }
}