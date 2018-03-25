class Task {
	constructor(title) {
		this.title = title;
		this.status = false;
		console.log(title);
		console.log('me super');
	}

	complete() {
		this.done = true;
						  // заполнитель места
		console.log(`Task "${this.title}" is completed`)
	}
}

// EXTENDS METHODS OF TASK
class SubTask extends Task {
	constructor(title, parent) {
		// If subclass has constructor, it must have super calling in the first line of it
		super(title);
		this.parent = parent;
		console.log('Creating of subtask');
	}

	complete() {
		super.complete();
		console.log('method is overrided');
	}
}

let task = new Task('Learn ES6');
let subtask = new SubTask('Learn inheritance', task);

console.log(task);
console.log(subtask);

task.complete();
subtask.complete();

console.log(subtask instanceof SubTask); // TRUE
console.log(subtask instanceof Task); // TRUE