export interface TODO {
	// 
	[Key: string]: string | boolean;
	id: string;
	content: string;
	isComplete: boolean;
}

export enum Todo {
	id = 'id',
	content = 'content',
	isComplete = 'isComplete',
}

export interface todoMakerType {
	(Task: Array<TODO>): (JSX.Element | boolean)[];
}
