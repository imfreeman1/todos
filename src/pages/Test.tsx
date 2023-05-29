import React from 'react';
import { CompletedDiv, DefaultDiv, DefaultInnerDiv, TodoSection, TodoTask } from 'src/styles/styledComponent';
import Lottie from 'lottie-react';
import travel from '../../public/lottie/travel.json';
const Test = () => {
	return (
		<TodoSection>
			<Lottie
				animationData={travel}
				className="w-screen h-screen absolute"
			/>
			<DefaultDiv>123123</DefaultDiv>
			<CompletedDiv>555</CompletedDiv>
			<TodoTask>
				<DefaultInnerDiv>111</DefaultInnerDiv>
			</TodoTask>
		</TodoSection>
	);
};

export default Test;
