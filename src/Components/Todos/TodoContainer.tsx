import React from 'react';
import TodoPresent from './TodoPresent';
import App from 'next/app';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/Redux/Store';
import { setTodo } from 'src/Redux/action';

// interface는 객체를 만들 때, 사용하는 것 같음.

const TodoContainer: React.FC = () => {
	const todoList = useSelector((state: RootState) => state.todo);
	const dispatch = useDispatch();

	const handleSubmit = (event: Event) => {
		console.log(event);
		dispatch(setTodo({ id }));
	};
	return (
		<TodoPresent
			todoList={todoList}
			handleSubmit={handleSubmit}
		/>
	);
};
App;
export default TodoContainer;
