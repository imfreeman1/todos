import React, { MouseEvent, useRef } from 'react';
import TodoPresent from './TodoPresent';
import App from 'next/app';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/Redux/Store';
import { removeTodo, setTodo } from 'src/Redux/action';
import { v4 } from 'uuid';

// interface는 객체를 만들 때, 사용하는 것 같음.

interface IPayload {
	id : string;
	content: string;
}

const TodoContainer: React.FC = () => {
	const {TodoTask, CompleteTask} = useSelector((state: RootState) => state.todo);
	const inputRef = useRef<HTMLInputElement>(null);
	const dispatch = useDispatch();
	const focusRef = useRef<HTMLLIElement>();

	const removeHandler = (event: MouseEvent) => {
		const target = event.target as HTMLButtonElement;
		const selectedId:IPayload = {id:target.parentNode.id};
		dispatch(removeTodo( selectedId));
	};

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
			TodoTask={TodoTask}
			handleSubmit={handleSubmit}
			inputRef={inputRef}
			removeHandler={removeHandler}
			focusRef={focusRef}
		/>
	);
};
App;
export default TodoContainer;
