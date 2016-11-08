export class Task {
	constructor(
		public id: number,
		public title: string,
		public createdAt: Date,
		public done: boolean
	) {}
}