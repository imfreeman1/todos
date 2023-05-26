import React, { MouseEvent, useRef } from 'react';
import TodoPresent from './TodoPresent';
import App from 'next/app';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/Redux/Store';
import { removeTodo, setTodo } from 'src/Redux/action';
import { v4 } from 'uuid';

// interface는 객체를 만들 때, 사용하는 것 같음.

const TodoContainer: React.FC = () => {
	const { TodoTask } = useSelector((state: RootState) => state.todo);
	const dispatch = useDispatch();
	const inputRef = useRef<HTMLInputElement>(null);
	const focusRef = useRef<HTMLLIElement>(null);

	const removeHandler = (event: MouseEvent) => {
		const target = event.target as HTMLButtonElement;
		dispatch(removeTodo({ id: target.parentNode.id })); // 여기에 id값이 any라서 string을 넣을 수 없다.
	};

	const handleSubmit = (event: MouseEvent) => {
		event.preventDefault();
		const newID: string = v4();
		if (inputRef.current && inputRef.current.value !== '') {
			dispatch(setTodo({ id: newID, content: inputRef.current.value, isComplete: false }));
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
