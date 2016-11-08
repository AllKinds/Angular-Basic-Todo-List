import  { TASKS } from './mocks';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskDataService {
	getTasks() {
		return TASKS;
	}
}