import React, { HTMLInputTypeAttribute, RefObject } from 'react';
import { DefaultStyle } from 'src/styles/styledComponent';

interface IInput {
	type: HTMLInputTypeAttribute;
	inputRef?: RefObject<HTMLInputElement>;
	placeholder?: string;
	onClick?: MouseEvent;
}

const Input = ({ inputRef, placeholder, type }: IInput) => {
	return (
		<DefaultStyle.input
			placeholder={placeholder}
			ref={inputRef}
			type={type}
		/>
	);
};

export default Input;
