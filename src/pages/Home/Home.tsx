import { HomeContainer } from './Home.styled';
import HabitTile from '../../components/HabitTile/HabitTile';
import { useContext, useEffect } from 'react';
import { StateContext } from '../../App';
import { getAllHabits } from '../../api/services';

export default function Home() {
	const state = useContext(StateContext);

	useEffect(() => {
		getAllHabits().then((res) => {
			state.setUserData(res.data);
		});
	}, [state, state.modalIsOpen]);

	return (
		<HomeContainer>
			{state.userData.length !== 0 &&
				state.userData.map((habit, index) => {
					return (
						<HabitTile
							{...habit}
							key={index}
						/>
					);
				})}
		</HomeContainer>
	);
}
