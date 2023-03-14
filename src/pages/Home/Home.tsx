import React from "react";
import { HomeContainer } from "./Home.styled";
import HabitTile from "../../components/HabitTile/HabitTile";

export default function Home() {
  return (
    <HomeContainer>
      <HabitTile />
      <HabitTile />
      <HabitTile />
      <HabitTile />
    </HomeContainer>
  );
}
