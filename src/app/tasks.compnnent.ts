import { Component } from '@angular/core';
import { Task } from './task';
import { TASKS } from './mocks';

@Component ({
	selector: 'tasks',
	templateUrl: './tasks.component.html'
})

export class Tasks {
	tasks: Task[];

	ngOnInit() {
		this.tasks = TASKS
	}
}