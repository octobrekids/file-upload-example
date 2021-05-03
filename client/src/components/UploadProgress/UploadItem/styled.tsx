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

export { WrapperItem, LeftSide };
