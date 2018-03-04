class Task {
	constructor(title = '') {
		console.log('creating task');
		this.title = title;
		this.done = false;
		Task.count += 1; // autoincrement self var
	} // NOT COMMA AFTER THIS

	complete() {
		this.done = true;
	}
}

// STATIC VAR FOR CLASS
 Task.count = 0;

let task = new Task('Learn ES6');

console.log(task.title);

/**
console.log(typeof Task); // Function that create object
console.log(typeof task); // Object
console.log(task instanceof Task); // True
**/