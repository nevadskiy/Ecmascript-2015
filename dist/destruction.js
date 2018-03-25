'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var js = 'Javascript',
    php = 'PHP',
    py = 'Python',
    rb = 'Ruby';


console.log(js, php, py, rb);

var scores = [1, 2, 3];

var low = scores[0],
    high = scores[2],
    higher = scores[3];
// 1, empty, 3, undefined 

var low1 = scores[0],
    rest = scores.slice(1);
// 1, [2, 3]

var low2 = scores[0],
    mid2 = scores[1],
    high2 = scores[2],
    _scores$ = scores[3],
    higher2 = _scores$ === undefined ? '4' : _scores$;
// with default value


var low3 = 1,
    mid3 = 2,
    high3 = 3,
    higher3 = 4;
// nested destruction

function getScores() {
    return scores;
}

// destruction for return two values

var _getScores = getScores(),
    _getScores2 = _slicedToArray(_getScores, 2),
    low4 = _getScores2[0],
    mid4 = _getScores2[1];

var yes = 'yes';
var no = 'no';

//swapping values


//description
//babeling to array calling with buffers


// THE SAME PRACTICE WITH OBJECTS
var _ref = [no, yes];
yes = _ref[0];
no = _ref[1];
var person = { firstname: 'John', lastname: 'Doe' };

var firstname = person.firstname,
    lastname = person.lastname;
// new 2 vars with values from relevant props

//renaming  and default value

var first = person.firstname,
    last = person.lastname,
    _person$age = person.age,
    age = _person$age === undefined ? 25 : _person$age;

console.log(first, last);