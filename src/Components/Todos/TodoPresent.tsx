import React, { MouseEvent, RefObject } from 'react';
import Button from '../Button/Button';

interface ITodo {
	id: string;
	content: string;
}

interface Props {
	todoList: ITodo[];
	handleSubmit(event: MouseEvent): void;
	inputRef: RefObject<HTMLInputElement>;
	onClick(): void;
}

const TodoPresent = ({ todoList, handleSubmit, inputRef, onClick }: Props) => {
	return (
		<section className="grid grid-cols-8 grid-rows-8 w-screen h-screen">
			<div className=" col-start-3 col-span-4 row-start-2 row-span-6 bg-orange-200 flex flex-col items-center rounded-lg shadow-xl">
				<div className="my-6">
					<h1 className="font-bold text-6xl">TodoList</h1>
				</div>
				<div className=" w-2/3 border-2 border-black rounded-lg p-3 grow">
					<ul>
						{todoList.map((todo, idx) => (
							<li
								className="flex my-2 gap-2 justify-start"
								key={idx}
							>
								<input type="checkbox" />
								<span className="grow">{todo.content}</span>
								<Button
									className=""
									content="삭제"
									onClick={onClick}
									type="button"
								/>
							</li>
						))}
					</ul>
				</div>
				<form className="my-4 gap-2 flex">
					<input
						className=" placeholder:bg-white border-2 border-black rounded-md p-1"
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
