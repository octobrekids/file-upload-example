import styled from 'styled-components';

const Wrapper = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	background-color: white;
	width: 400px;
	overflow: scroll;
	max-height: 400px;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;

	h4 {
		background-color: beige;
		margin: 0;
		padding: 20px;
	}
`;

export { Wrapper };
