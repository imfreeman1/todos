import React from 'react';

interface IButton {
	type: 'button' | 'submit' | 'reset' | undefined;
	content: string;
	onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
	className?: string;
}

// 버튼을 만들어서 쓸때, event를 받을때도 있고 안받을때도 있잖아요. 그래서

const Button = ({ content, onClick, type, className  }: IButton) => {
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
