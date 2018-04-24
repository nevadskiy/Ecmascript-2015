'use strict';

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function Task(title) {
	_classCallCheck(this, Task);

	this.title = title;
	this.status = false;
	console.log(title);
	console.log('me super');
};

// EXTENDS METHODS OF TASK


var SubTask = function (_Task) {
	_inherits(SubTask, _Task);

	function SubTask(title) {
		_classCallCheck(this, SubTask);

		return _possibleConstructorReturn(this, (SubTask.__proto__ || Object.getPrototypeOf(SubTask)).call(this, title));
	}

	return SubTask;
}(Task);

var task = new Task('Learn ES6');
var subtask = new SubTask('Learn inheritance');

console.log(task);
console.log(subtask);

console.log(subtask instanceof SubTask); // TRUE
console.log(subtask instanceof Task); // TRUE