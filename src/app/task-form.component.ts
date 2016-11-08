import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from './task';

@Component({
	// moduleId: module.id, // ask Ron
	selector: 'task-form',
	templateUrl: 'task-form.component.html'
})
export class TaskFormComponent {
	model = new Task(null, "", new Date, false);
	submited = false;

	//@Input('test') test2:string;
	@Output() notify= new EventEmitter<string>();
	@Output() submitNewTask = new EventEmitter<Task>();

	onSubmit() { 
		this.submited = true;
		this.notify.emit('Click from nested component');
		this.submitNewTask.emit(this.model);
	}

	// TODO: Remove function Later
	get diagnostic() { return JSON.stringify(this.model); }
}