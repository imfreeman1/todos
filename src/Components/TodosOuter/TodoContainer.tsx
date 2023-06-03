import React, { MouseEvent, useRef, useState } from 'react';
import App from 'next/app';
import { removeTodo } from 'src/Redux/action';
import { v4 } from 'uuid';
import TodoPresent from './TodoPresent';
import { useRecoilState } from 'recoil';
import { todoStates } from 'src/recoil/atoms/todoStates';
import { TODO } from 'src/Interface/todoInterface';
import TODO_CONSTANT from 'src/Constants/TodoConstants';

// interface는 객체를 만들 때, 사용하는 것 같음.

export interface InputStates {
	title: string;
	content: string;
}

const TodoContainer: React.FC = () => {
	const focusRef = useRef<HTMLLIElement>(null);
	const [inputStates, setInputStates] = useState<InputStates>(TODO_CONSTANT.INIT);
	const [disabled, setDisabled] = useState<boolean>(false);

	const [todoList, setTodoList] = useRecoilState(todoStates);
	// const removeHandler = (event: MouseEvent) => {
	// 	const target = event.target as HTMLButtonElement;
	// 	dispatch(removeTodo({ id: target.parentNode.id })); // 여기에 id값이 any라서 string을 넣을 수 없다.
	// };
	console.log(inputStates);
	console.log(todoList);
	const handleSubmit = () => {
		const newID: string = v4();

		const newTodo: TODO[] = [{ ...inputStates, id: newID, isComplete: false }];
		setTodoList((s) => s.concat(newTodo));
		setInputStates((s) => (s = TODO_CONSTANT.INIT));
	};
	return (
		<TodoPresent
			TodoTask={todoList}
			handleSubmit={handleSubmit}
			inputStates={inputStates}
			setInputStates={setInputStates}
			// removeHandler={removeHandler}
			focusRef={focusRef}
		/>
	);
};
App;
export default TodoContainer;
