import React, { MouseEvent, useRef } from 'react';
import TodoPresent from './TodoPresent';
import App from 'next/app';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/Redux/Store';
import { setTodo } from 'src/Redux/action';
import { v4 } from 'uuid';

// interface는 객체를 만들 때, 사용하는 것 같음.

const TodoContainer: React.FC = () => {
	const todoList = useSelector((state: RootState) => state.todo);
	console.log(todoList);
	const inputRef = useRef<HTMLInputElement>(null);
	const dispatch = useDispatch();

	const removeHandler = () => {};

	const handleSubmit = (event: MouseEvent) => {
		event.preventDefault();
		const newID: string = v4();
		if (inputRef.current && inputRef.current.value !== '') {
			dispatch(setTodo({ id: newID, content: inputRef.current.value }));
			inputRef.current.value = '';
		}
	};
	return (
		<TodoPresent
			todoList={todoList}
			handleSubmit={handleSubmit}
			inputRef={inputRef}
			onClick={removeHandler}
		/>
	);
};
App;
export default TodoContainer;
