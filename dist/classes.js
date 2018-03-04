'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
	function Task() {
		var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

		_classCallCheck(this, Task);

		console.log('creating task');
		this.title = title;
		this.done = false;
		Task.count += 1; // autoincrement self var
	} // NOT COMMA AFTER THIS

	_createClass(Task, [{
		key: 'complete',
		value: function complete() {
			this.done = true;
		}
	}]);

	return Task;
}();

// STATIC VAR FOR CLASS


Task.count = 0;

var task = new Task('Learn ES6');

console.log(task.title);

/**
console.log(typeof Task); // Function that create object
console.log(typeof task); // Object
console.log(task instanceof Task); // True
**/