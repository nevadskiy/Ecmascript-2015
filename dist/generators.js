'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(generator),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(range),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(generator),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(generating);

function generator() {
    return regeneratorRuntime.wrap(function generator$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    console.log('start');
                    _context.next = 3;
                    return 1;

                case 3:
                    //stop on this line
                    console.log('finish');
                    _context.next = 6;
                    return 2;

                case 6:
                    _context.next = 8;
                    return 3;

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

console.log(typeof generator === 'undefined' ? 'undefined' : _typeof(generator));
var iterator = generator();

console.log(iterator.next()); //after yield, done false
console.log(iterator.next()); //done: true
console.log(iterator.next()); //done: true

function generate() {
    var current = 1;
    console.log('start');
    return _defineProperty({}, Symbol.iterator, function () {
        return {
            next: function next() {
                var result = { value: undefined, done: true };

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
        };
    });
}

generate()[Symbol.iterator]();

// Range function
function range(start, end) {
    var current;
    return regeneratorRuntime.wrap(function range$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    current = start;

                case 1:
                    if (!(current <= end)) {
                        _context2.next = 6;
                        break;
                    }

                    _context2.next = 4;
                    return current++;

                case 4:
                    _context2.next = 1;
                    break;

                case 6:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = range(1, 10)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var num = _step.value;

        console.log(num);
    }

    // Also as method generator the same
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

var numbers = {
    range: /*#__PURE__*/regeneratorRuntime.mark(function range(start, end) {
        var current;
        return regeneratorRuntime.wrap(function range$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        current = start;

                    case 1:
                        if (!(current <= end)) {
                            _context3.next = 6;
                            break;
                        }

                        _context3.next = 4;
                        return current++;

                    case 4:
                        _context3.next = 1;
                        break;

                    case 6:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, range, this);
    })
};

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = numbers.range(1, 10)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _num = _step2.value;

        console.log(_num);
    }

    // Part 2

    /**
     * Declaration
     */
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

function generator() {
    return regeneratorRuntime.wrap(function generator$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _marked3, this);
}

/**
 * Anonymous generator declaration
 */
var generation = /*#__PURE__*/regeneratorRuntime.mark(function generation() {
    return regeneratorRuntime.wrap(function generation$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                case 'end':
                    return _context5.stop();
            }
        }
    }, generation, this);
});

/**
 * Object method
 */
var obj = {
    generator: /*#__PURE__*/regeneratorRuntime.mark(function generator() {
        return regeneratorRuntime.wrap(function generator$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, generator, this);
    })
};

var Something = function () {
    function Something() {
        _classCallCheck(this, Something);
    }

    _createClass(Something, [{
        key: 'generator',
        value: /*#__PURE__*/regeneratorRuntime.mark(function generator() {
            return regeneratorRuntime.wrap(function generator$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, generator, this);
        })
    }]);

    return Something;
}();
/////


function generating() {
    var result;
    return regeneratorRuntime.wrap(function generating$(_context8) {
        while (1) {
            switch (_context8.prev = _context8.next) {
                case 0:
                    _context8.next = 2;
                    return;

                case 2:
                    _context8.t0 = _context8.sent;
                    result = 1 + _context8.t0;

                    console.log('Result: ' + result);
                    _context8.next = 7;
                    return 1;

                case 7:
                    _context8.next = 9;
                    return 2;

                case 9:
                case 'end':
                    return _context8.stop();
            }
        }
    }, _marked4, this);
}

iterator = generating();
console.log(iterator.next(1)); //first restart
console.log(iterator.next(1)); //second restart
console.log(iterator.next()); //done true now