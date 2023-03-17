import { HomeContainer } from './Home.styled';
import HabitTile from '../../components/HabitTile/HabitTile';
import { useContext } from 'react';
import { StateContext } from '../../App';

export default function Home() {
	const state = useContext(StateContext);
	console.log(state.userData);

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
