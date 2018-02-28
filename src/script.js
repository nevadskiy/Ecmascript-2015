let name = 'hello es6';

if (true) {
	let checker = 'es6 scope check';
}
console.log(checker);

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
