import React, { ChangeEvent, ChangeEventHandler, Dispatch, ReactElement, RefObject, SetStateAction } from 'react';
import Button from '../Button/Button';
import Todo from 'src/Constants/TodoConstants';
import { TODO } from 'src/Interface/todoInterface';
import TodoDisplayContainer from '../TodoDisplay/TodoDisplayContainer';
import { StyledInnerDiv, StyledOuterDiv } from 'src/styles/styledComponent';
import Input from '../Input/Input';
import { InputStates } from './TodoContainer';
import { text } from 'stream/consumers';

interface Props {
	TodoTask: TODO[];
	handleSubmit(): void;
	inputStates: InputStates;
	focusRef: RefObject<HTMLSpanElement>;
	setInputStates: Dispatch<SetStateAction<InputStates>>;
}

const TodoPresent = ({ TodoTask, handleSubmit, focusRef, inputStates, setInputStates }: Props) => {
	return (
		<>
			<StyledOuterDiv.completed>
				<ul className="flex gap-3 w-screen items-center justify-center overflow-hidden">
					{TodoTask.map(({ id, title, content }): ReactElement => {
						return (
							<li
								key={id}
								className="w-full h-full flex"
							>
								<StyledInnerDiv.completed>
									{title}
									{content}
								</StyledInnerDiv.completed>
							</li>
						);
					})}
				</ul>
			</StyledOuterDiv.completed>
			<StyledOuterDiv.todoTask>
				<StyledInnerDiv.todoInput>
					<label>
						<p>제목</p>
						<Input
							value={inputStates.title}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setInputStates((s) => (s = { ...s, title: e.target.value }))
							}
							type="text"
						/>
					</label>
					<label>
						<p>내용</p>
						<textarea
							form="myForm"
							className=" border-2 border-black"
							value={inputStates.content}
							onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
								setInputStates((s) => (s = { ...s, content: e.target.value }))
							}
						/>
					</label>

					<Button
						type="button"
						onClick={() => handleSubmit()}
						content="보내기"
					/>
				</StyledInnerDiv.todoInput>
			</StyledOuterDiv.todoTask>
			<StyledOuterDiv.date>
				<p>111</p>
			</StyledOuterDiv.date>
		</>
	);
};

export default TodoPresent;
