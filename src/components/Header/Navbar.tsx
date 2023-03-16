import React from 'react';
import { Button } from '../FormModal/FormModal.styled';
import { useContext } from 'react';
import { StateContext } from '../../App';

export default function Navbar() {
	const state = useContext(StateContext);

	const styles = {
		display: 'flex',
		color: 'white',
		background: 'blue',
		justifyContent: 'space-between',
		// alignText: 'center',
	};

	const handleAddHabit = () => {
		// !state.modalIsOpen ? state.setModalIsOpen(true): state.setModalIsOpen(false)
		state.setModalIsOpen(!state.modalIsOpen);
		console.log(state.modalIsOpen);
	};

	return (
		<div style={styles}>
			<h1>HABIT TRACKER</h1>
			<Button onClick={handleAddHabit}>ADD HABITS</Button>
		</div>
	);
}
