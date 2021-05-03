import styled from 'styled-components';

const WrapperItem = styled.div`
	display: grid;
	grid-template-columns: calc(100% * 50px) 50px;
	padding: 16px;
	box-shadow: 0px 1px 2px lightgray;
`;

const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-right: 8px;
`;

const progressBar = styled.div`
	width: 100%;
	height: 15px;
	background-color: lightgray;
	margin-bottom: 8px;
	border-radius: 20px;

	div {
		height: 15px;
		background-color: lightgreen;
		border-radius: 20px;
	}
`;

export { WrapperItem, LeftSide };
