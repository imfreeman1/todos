import styled from 'styled-components';

export const TodoSection = styled.section`
	display: grid;
	grid-template-columns: repeat(24, minmax(0, 1fr));
	grid-template-rows: repeat(12, minmax(0, 1fr));
	width: 100vw;
	height: 100vh;
	background-color: #cadbe9;
`;

export const DefaultStyle = {
	outerDiv: styled.div`
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 1em;
		box-shadow: 1rem;
		display: flex;
		justify-content: center;
	`,
	innerDiv: styled.div`
		align-self: center;
		background-color: white;
		width: 100%;
		height: 100%;
		border-radius: 1em;
	`,
	input: styled.input`
		border-radius: 1em;
		border: solid;
		border-color: black;
	`,
};

// class로 변경하면 더좋을듯.
export const StyledOuterDiv = {
	completed: styled(DefaultStyle.outerDiv)`
		overflow: hidden;
		grid-column-start: 3;
		grid-column-end: 11;
		grid-row-start: 2;
		grid-row-end: 6;
	`,
	todoTask: styled(DefaultStyle.outerDiv)`
		grid-column-start: 3;
		grid-column-end: 11;
		grid-row-start: 7;
		grid-row-end: 12;
	`,
	date: styled(DefaultStyle.outerDiv)`
		grid-row-start: 2;
		grid-row-end: 7;
		grid-column-start: 14;
		grid-column-end: 21;
	`,
	wether: styled(DefaultStyle.outerDiv)`
		grid-row-start: 8;
		grid-row-end: 11;
		grid-column-start: 14;
		grid-column-end: 21;
	`,
};

export const StyledInnerDiv = {
	completed: styled(DefaultStyle.innerDiv)`
		height: 70%;
	`,
	todoInput: styled(DefaultStyle.innerDiv)`
		width: 60%;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	`,
};
