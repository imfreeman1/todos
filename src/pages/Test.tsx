import React, { ReactElement } from 'react';
import { StyledInnerDiv, StyledOuterDiv, TodoSection } from 'src/styles/styledComponent';
import Lottie from 'lottie-react';
import travel from '../../public/lottie/travel.json';
import TodoContainer from 'src/Components/TodosOuter/TodoContainer';
const Test = () => {
	return (
		<TodoSection>
			<TodoContainer />
			<StyledOuterDiv.wether />
			<Lottie
				animationData={travel}
				className="w-full h-screen absolute z-10 opacity-50 pointer-events-none"
			/>
		</TodoSection>
	);
};

export default Test;
