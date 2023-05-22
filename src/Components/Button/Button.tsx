import React from 'react';

interface IButton {
	type: 'button' | 'submit' | 'reset' | undefined;
	content: string;
	onClick(): void;
	className?: string;
}

const Button = ({ content, onClick, type, className }: IButton) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className={className}
		>
			{' '}
			{content}{' '}
		</button>
	);
};

export default Button;
