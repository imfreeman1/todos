import React, { MouseEvent, RefObject } from 'react';
import Button from '../Button/Button';
import Todo from 'src/Constants/TodoConstants';

interface ITodo {
	id: string;
	content: string;
}

interface Props {
	TodoTask: ITodo[];
	handleSubmit(event: React.MouseEvent<HTMLInputElement>): void;
	inputRef: RefObject<HTMLInputElement>;
	focusRef: RefObject<HTMLSpanElement>;
	removeHandler(event: React.MouseEvent<HTMLButtonElement>): void;
}

const TodoPresent = ({ TodoTask, handleSubmit, inputRef, removeHandler, focusRef }: Props) => {
	return (
		<section className="grid grid-cols-8 grid-rows-8 w-screen h-screen">
			<div className=" col-start-2 col-span-6 row-start-2 row-span-6 bg-orange-200 flex flex-col items-center rounded-lg drop-shadow-xl">
				<div className="my-6">
					<h1 className="font-bold text-6xl tracking-wider">{Todo.title}</h1>
				</div>
				<div className='flex w-5/6 gap-12 grow'>
				<div className=" w-2/3 border-2 border-black rounded-lg p-3 ">
					<h2 className=' text-center border-b-2'>
						미완료
					</h2>
					<ul>
						{TodoTask.map((todo) => (
							<li
								className="flex my-2 gap-2 justify-start"
								key={todo.id}
								id = {todo.id}
							>
								<input type="checkbox" />
								<span
									className="grow"
								>
									{todo.content}
								</span>
								<Button
									className=""
									content="삭제"
									onClick={(event) => removeHandler(event)}
									type="button"
								/>
							</li>
						))}
					</ul>
				</div>
				<div className=" w-2/3 border-2 border-black rounded-lg p-3 grow">
					<h2 className=' text-center border-b-2'>
						완료
					</h2>
					<ul>
						{TodoTask.map((todo) => (
							<li
								className="flex my-2 gap-2 justify-start"
								key={todo.id}
								id = {todo.id}
							>
								<input type="checkbox" />
								<span
									className="grow"
								>
									{todo.content}
								</span>
								<Button
									className=""
									content="삭제"
									onClick={(event) => removeHandler(event)}
									type="button"
								/>
							</li>
						))}
					</ul>
				</div>
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
