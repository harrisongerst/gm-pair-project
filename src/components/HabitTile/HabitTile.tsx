import { useState } from 'react';
import { TileContainer } from './HabitTile.styled';
import { HabitInfo } from '../../types';

export default function HabitTile(props: HabitInfo) {
	const { habit_name, icon, start_date, description, completeAmount } = props;
	const [count, setCount] = useState<number>(0);

	return (
		<TileContainer maxAmount={completeAmount} count={count}
			onClick={() => {
				setCount((pre) => (pre >= completeAmount ? pre : pre + 1));
			}}>
			<div>
				<section>
					{count}/{completeAmount}
				</section>
				<img
					src={icon}
					alt='action'
				/>
				<h3>{habit_name}</h3>
				<p>Goal: {description}</p>
				<p>Started On: {start_date}</p>
			</div>
		</TileContainer>
	);
}
