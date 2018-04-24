class Task {
	constructor(title) {
		this.title = title;
		this.status = false;
		console.log(title);
		console.log('me super');
	}
}

// EXTENDS METHODS OF TASK
class SubTask extends Task {
	constructor(title) {
		super(title);
	}
}

let task = new Task('Learn ES6');
let subtask = new SubTask('Learn inheritance');

console.log(task);
console.log(subtask);

console.log(subtask instanceof SubTask); // TRUE
console.log(subtask instanceof Task); // TRUE