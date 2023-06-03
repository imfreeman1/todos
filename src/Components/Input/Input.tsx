import React, {
	ChangeEvent,
	ChangeEventHandler,
	FormEventHandler,
	HTMLInputTypeAttribute,
	MouseEventHandler,
	RefObject,
} from 'react';
import { SubmitErrorHandler } from 'react-hook-form';
import { DefaultStyle } from 'src/styles/styledComponent';

interface IInput {
	type: HTMLInputTypeAttribute;
	value?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	placeholder?: string;
	onSubmit?: FormEventHandler<HTMLInputElement>;
	onClick?: MouseEventHandler<HTMLInputElement>;
}

const Input = ({ placeholder, type, value, onChange, onSubmit, onClick }: IInput) => {
	return (
		<DefaultStyle.input
			placeholder={placeholder}
			onChange={onChange}
			value={value}
			onSubmit={onSubmit}
			type={type}
			onClick={onClick}
		/>
	);
};

export default Input;
