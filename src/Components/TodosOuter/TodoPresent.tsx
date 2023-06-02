import React, { ReactElement, RefObject } from 'react';
import Button from '../Button/Button';
import Todo from 'src/Constants/TodoConstants';
import { TODO } from 'src/Interface/todoInterface';
import TodoDisplayContainer from '../TodoDisplay/TodoDisplayContainer';
import { StyledInnerDiv, StyledOuterDiv } from 'src/styles/styledComponent';
import Input from '../Input/Input';

interface Props {
	TodoTask: TODO[];
	handleSubmit(event: React.MouseEvent<HTMLInputElement>): void;
	inputRef: RefObject<HTMLInputElement>;
	focusRef: RefObject<HTMLSpanElement>;
	removeHandler(event: React.MouseEvent<HTMLButtonElement>): void;
}

const TodoPresent = ({ TodoTask, handleSubmit, inputRef, removeHandler, focusRef }: Props) => {
	return (
		<>
			<StyledOuterDiv.completed>
				<ul className="flex gap-3 w-screen items-center justify-center overflow-hidden">
					{TodoTask.map(({ id, content }): ReactElement => {
						return (
							<li
								key={id}
								className="w-full h-full flex"
							>
								<StyledInnerDiv.completed>{content}</StyledInnerDiv.completed>
							</li>
						);
					})}
				</ul>
			</StyledOuterDiv.completed>
			<StyledOuterDiv.todoTask>
				<StyledInnerDiv.todoInput>
					<form className="flex flex-col items-center gap-3">
						<label>
							<p>Title</p>
							<Input
								inputRef={inputRef}
								type="text"
							/>
						</label>

						<textarea className=" border-2 border-black" />
						<Input
							type="submit"
							onClick={(e: MouseEvent) => handleSubmit(e)}
							disable={}
						/>
					</form>
				</StyledInnerDiv.todoInput>
			</StyledOuterDiv.todoTask>
			<StyledOuterDiv.date>
				<p>111</p>
			</StyledOuterDiv.date>
		</>
	);
};

export default TodoPresent;
