import styled from 'styled-components';

export const TodoSection = styled.section`
	display: grid;
	grid-template-columns: repeat(24, minmax(0, 1fr));
	grid-template-rows: repeat(12, minmax(0, 1fr));
	width: 100vw;
	height: 100vh;
	background-color: #cadbe9;
`;

export const DefaultDiv = styled.div`
	background-color: rgba(255, 255, 255, 0.1);
	border-radius: 1em;
	box-shadow: 1rem;
`;

export const CompletedDiv = styled(DefaultDiv)`
	overflow: hidden;
	grid-column-start: 3;
	grid-column-end: 11;
	grid-row-start: 3;
	grid-row-end: 6;
`;

export const TodoTask = styled(DefaultDiv)`
	grid-column-start: 3;
	grid-column-end: 11;
	grid-row-start: 7;
	grid-row-end: 11;
`;

export const DefaultInnerDiv = styled.div`
	background-color: white;
	border-radius: 1em;
`;
