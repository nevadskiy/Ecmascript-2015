class Task {
	constructor(title) {
		this._title = title;
		this.status = false;
		console.log(title);
		Task.count++;
		console.log('me super');
	}

	complete() {
		this.done = true;
						  // заполнитель места
		console.log(`Task "${this.title}" is completed`)
	}

	get title() {
		return this._title;
	}

	set title(value) {
		this._title = value;
	}

	static getDefaultTitle() {
		return 'Task';
	}
}

Task.count = 0;

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
let subtask = new SubTask('Learn inheritance');

console.log(task);
console.log(subtask);

console.log(subtask instanceof SubTask); // TRUE
console.log(subtask instanceof Task); // TRUE