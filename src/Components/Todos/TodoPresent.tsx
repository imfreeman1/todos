import React from 'react';

interface ITodo {
	id: number;
	content: string;
}

interface Props {
	todoList: ITodo[];
	handleSubmit(event: MouseEvent): void;
}

const TodoPresent = ({ todoList, handleSubmit }: Props) => {
	return (
		<section className="grid grid-cols-8 grid-rows-6 w-screen h-screen">
			<div className=" col-start-3 col-span-4 row-start-2 row-span-4 bg-blue-400 flex flex-col items-center">
				<div className="my-6">
					<h1 className="font-bold text-6xl">TodoList</h1>
				</div>
				<div>
					<ul>
						{todoList.map((todo, idx) => (
							<li key={idx}>
								<div>{todo.content}</div>
							</li>
						))}
					</ul>
				</div>
				<form>
					<input
						className=" placeholder:bg-white border-2 border-black rounded-md p-1"
						placeholder="내용"
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
