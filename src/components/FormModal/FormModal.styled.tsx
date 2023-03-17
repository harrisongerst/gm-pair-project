import styled from 'styled-components';

interface ModalProps {
	show: string;
}

export const ModalOverlay = styled.div<ModalProps>`
	z-index: 9999;
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background: rgba(40, 40, 40, 0.642);
	display: ${(props) => props.show};
	justify-content: center;
	align-items: center;

	h2 {
		color: #0e0e0e;
		font-family: 'Source Sans Pro', 'Arial', sans-serif;
		font-weight: bold;
	}
`;

export const Form = styled.form`
	color: #0e0e0e;
	font-family: 'Courier New';
	font-weight: 700;
	font-size: 16px;
	display: block;
	button {
		margin-top: 0.5em;
	}

	label {
		display: block;
	}

	input {
		background: white;
		outline: 0;
		border-width: 0 0 2px;
		border-color: #0e0e0e;
		box-shadow: 0 0 0 0 #0e0e0e;
		box-sizing: border-box;
		color: #0e0e0e;
		font-family: 'Courier New';
		font-weight: 400;
		font-size: 16px;
		width: 100%;
	}

	select {
		background: white;
		outline: 0;
		border-width: 0 0 2px;
		border-color: #0e0e0e;
		box-shadow: 0 0 0 0 #0e0e0e;
		box-sizing: border-box;
		color: #0e0e0e;
		font-family: 'Courier New';
		font-weight: 400;
		font-size: 16px;
		width: 100%;
	}
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	height: 100%;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 1;
`;

export const ModalContainer = styled.div`
	display: block;
	margin: 0 10px 10px 0;
	border: 1px solid #0e0e0e;
	border-radius: 0.5em;
	background: #bcccd0;
	/* width: 20%; */
	/* height: 20%; */
	transition: all 0.3s linear;
	position: absolute;
	z-index: 10;
	padding: 30px;
`;

export const Button = styled.button`
	background-color: #4caf50;
	border-radius: 0.5em;
	border: none;
	color: white;
	/* padding: 15px 32px; */
	text-align: center;
	text-decoration: none;
	display: inline-block;
	/* font-size: 16px; */
	margin: 0.2em;
	cursor: pointer;
`;
export const ErrorMessage = styled.p`
	color: red;
	font-weight: normal !important;
	margin: -20px 0 20px;
`;
