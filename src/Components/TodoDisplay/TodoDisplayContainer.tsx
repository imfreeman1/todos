import React from 'react';
import TodoDisplayPresent from './TodoDisplayPresent';
import { TODO, todoMakerType } from 'src/Interface/todoInterface';
import Button from '../Button/Button';

type Props = {
	TodoTask: TODO[];
	removeHandler: React.MouseEventHandler<HTMLButtonElement>;
};

const TodoDisplayContainer = ({ TodoTask, removeHandler }: Props) => {
	const todoMaker: todoMakerType = (Task) => {
		return Task.map(
			({ id, content, isComplete }) =>
				isComplete && (
					<li
						className="flex my-2 gap-2 justify-start"
						key={id}
					>
						<input type="checkbox" />
						<span className="grow">{content}</span>
						<Button
							className=""
							content="삭제"
							onClick={(event) => removeHandler(event)}
							type="button"
						/>
					</li>
				),
		);
	};
	return (
		<TodoDisplayPresent
			todoMaker={todoMaker}
			TodoTask={TodoTask}
		/>
	);
};

export default TodoDisplayContainer;
