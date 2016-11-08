import { Component, Input, Output } from '@angular/core';
import { Task } from './task';
import { TaskDataService } from './task-data-service';

@Component ({
	selector: 'tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./table.component.css']
})

export class Tasks {
	tasks: Task[];
	@Input() newTask: Task;
	test_2: string;
	test: string= '5';
	constructor(private taskDataService: TaskDataService) {}

	ngOnInit() {
		this.tasks = this.taskDataService.getTasks();
	}
	
	onNotify(message:string):void {
		alert(message);
	}

	submitNewTask(newTask:Task):void {
		this.tasks.push(newTask);
	}
}