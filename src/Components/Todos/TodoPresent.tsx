import React, { RefObject } from 'react';
import Button from '../Button/Button';
import Todo from 'src/Constants/TodoConstants';
import { TODO } from 'src/Interface/todoInterface';
import TodoDisplayContainer from '../TodoDisplay/TodoDisplayContainer';

interface Props {
	TodoTask: TODO[];
	handleSubmit(event: React.MouseEvent<HTMLInputElement>): void;
	inputRef: RefObject<HTMLInputElement>;
	focusRef: RefObject<HTMLSpanElement>;
	removeHandler(event: React.MouseEvent<HTMLButtonElement>): void;
}

const TodoPresent = ({ TodoTask, handleSubmit, inputRef, removeHandler, focusRef }: Props) => {
	return (
		<section className="grid grid-cols-12 grid-rows-12 w-screen h-screen">
			<div className="my-6 col-start-4">
					<h1 className="font-bold text-6xl tracking-wider">{Todo.title}</h1>
				</div>
			<div className=" col-start-2 col-span-6 row-start-2 row-span-6 bg-[#8EC0E4] flex flex-col items-center rounded-lg drop-shadow-xl">
				<div className="flex w-5/6 gap-12 grow">
					<TodoDisplayContainer
						TodoTask={TodoTask}
						removeHandler={removeHandler}
					/>
					<TodoDisplayContainer
						TodoTask={TodoTask}
						removeHandler={removeHandler}
					/>
				</div>
				<form className="my-4 gap-2 flex">
					<input
						className=" placeholder:bg-white border-2 border-black rounded-md p-1"
						type="text"
						placeholder="내용"
						ref={inputRef}
					/>
					<input
						type="submit"
						onClick={(event) => handleSubmit(event)}
					/>
				</form>
			</div>
		</section>
	);
};

export default TodoPresent;
