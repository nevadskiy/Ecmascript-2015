// let name = 'hello es6';

// if (true) {
// 	let checker = 'es6 scope check';
// }
// console.log(checker);

// Part 2:
// Let vs Var checking

// SELECTOR CACHING METHOD
function SelecorCache()
{
	var collection = {};

	function getFromCache(selector)
	{
		if (undefined === collection[selector]) {
			collection[selector] = document.querySelectorAll(selector);
		}
		return collection[selector];
	}

	return { get: getFromCache };
}
var selector = new SelecorCache();

var buttons = selector.get('button');

// for (var i = 0; i < buttons.length; i++) { // ONCLICK THE SAME RESULT FOR EVERY BUTTON	
for (let i = 0; i < buttons.length; i++) {
	var button = buttons[i];
	button.innerText = i;
	button.onclick = function() {
		console.log(i);
	}
}

// PART 3: Consts

const LIGHT_SPEED = 3000000; // Will not reassign after update 


// PART 4: Spread operator

let staticLanguages = ['C', 'C++', 'C#'];
let dynamicLanguages = ['Javascript', 'PHP', 'Ruby'];
let languages = [...staticLanguages, 'C#', ...dynamicLanguages, 'Python'];

console.log([...staticLanguages]); // Spread and back it again (nothing changes)

console.log(languages);

function add(x, y, z)
{
	console.log(x + y + z);
}

let numbers = [1, 2, 3];

add(...numbers); // Spreading array into numbers (SIMILAR TO PHP)