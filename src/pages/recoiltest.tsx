import React from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ctnStates } from '../recoil/atoms/ctnStates';
import AskView from 'src/Components/Ask';
import { doubleSum } from 'src/recoil/selectors/testSelector';

const ResultDiv = styled.div`
	width: 300px;
	height: 200px;
`;

const StyledBtn = styled.button`
	width: 100px;
	height: 100px;
`;

const Recoiltest = () => {
	const [ctn, setCtn] = useRecoilState(ctnStates);
	const doubleView = useRecoilValue(doubleSum);
	const [ctn2, setCtn2] = useRecoilState(doubleSum);
	return (
		<>
			<ResultDiv>
				{ctn}, {doubleView}
			</ResultDiv>
			<AskView />
			<StyledBtn onClick={() => setCtn((s) => s + 1)}>+</StyledBtn>
			<StyledBtn onClick={() => setCtn((s) => s - 1)}>-</StyledBtn>
			<StyledBtn onClick={() => setCtn((s) => s - 1)}>+2</StyledBtn>
			<StyledBtn onClick={() => setCtn2((s) => s + 2)}>set+2</StyledBtn>
		</>
	);
};

export default Recoiltest;
