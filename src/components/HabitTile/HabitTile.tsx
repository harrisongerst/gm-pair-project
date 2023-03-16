import React from 'react'
import { TileContainer } from './HabitTile.styled'
import headshot from '../../assets/headshot.jpg'
import { HabitData } from "../../pages/Home/Home";


export default function HabitTile(props: HabitData) {
  const { habit_name, icon, start_date, description } = props;
  return (
    <TileContainer>
      <div>
        <img src={icon} />
        <h1>{habit_name}</h1>
      </div>
    </TileContainer>
  );
}
