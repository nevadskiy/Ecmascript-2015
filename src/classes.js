class Task {
	// ALL METHODS ARE PUBLIC

	// DEFAULT VALUE TO STATIC METHOD
	constructor(title = Task.getDefaultTitle()) {
		console.log('creating task');
		this.title = title;
		this._done = false;
		Task.count += 1; // autoincrement self var
	} // NOT COMMA AFTER THIS

	complete() {
		this.done = true;
	}

	// STATIC METHODS (cant be called from object)
	static getDefaultTitle() {
		return 'Task'
	}

	//GETS AND SETS are filters (like accessors and mutators from laravel)
	get done() {
		return this._done === true ? 'Task is done' : 'Task is active'
	}

	set done(value) {
		if (value !== undefined && typeof value === 'boolean') {
			this._done = value;
		} else {
			console.error(value + ' is not valid');
		}
	}
}

// STATIC VAR FOR CLASS
 Task.count = 0;

let task = new Task('Learn ES6');
let task2 = new Task();

// console.log(task.title);
// console.log(task2.title);

console.log(task.done);
task.complete();
console.log(task.done);

/**
console.log(typeof Task); // Function that create object
console.log(typeof task); // Object
console.log(task instanceof Task); // True
**/