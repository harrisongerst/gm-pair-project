import { useEffect, useState } from 'react';
import { TileContainer } from './HabitTile.styled';
import { HabitInfo, HabitsUpdate } from '../../types';
import { format } from 'date-fns';
import { getOneHabits, updateHabits } from '../../api/services';

export default function HabitTile(props: HabitInfo) {
	const { id, habit_name, icon, start_date, description, completeAmount } =
		props;
	const [count, setCount] = useState<number>(() => 0);

	const handleClick = () => {
		setCount((pre) => (pre >= completeAmount ? pre : pre + 1));
		const toUpdate: HabitsUpdate = { id: id as number, count: count };
		console.log(toUpdate, 'and', count);
		updateHabits(toUpdate);
	};

	useEffect(() => {
		setCount((pre) => props.count as number);
	}, []);

	return (
		<TileContainer
			maxAmount={completeAmount}
			count={props.count as number}
			onClick={handleClick}>
			<div>
				<section>
					{props.count}/{completeAmount}
				</section>
				<img
					src={icon}
					alt='action'
				/>
				<h3>{habit_name}</h3>
				<p>Goal: {description}</p>
				<p>Started On: {start_date.substring(0, 10)}</p>
			</div>
		</TileContainer>
	);
}
