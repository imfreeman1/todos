import React from 'react';
import { TODO, todoMakerType } from 'src/Interface/todoInterface';

type Props = {
	TodoTask: TODO[];
	todoMaker: todoMakerType;
};

const TodoDisplayPresent = ({ TodoTask, todoMaker }: Props) => {
	return (
		<div className=" w-2/3 border-2 border-black rounded-lg p-3 ">
			<h2 className=" text-center border-b-2">미완료</h2>
			<ul>{todoMaker(TodoTask)}</ul>
		</div>
	);
};

export default TodoDisplayPresent;
