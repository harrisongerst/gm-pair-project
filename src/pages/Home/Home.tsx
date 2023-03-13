import React from "react";
import { HomeContainer, UnorderedHabitList } from "./Home.styled";
import HabitTile from "../../components/HabitTile/HabitTile";

export default function Home() {
  return (
    <div>
      <HomeContainer>
        <UnorderedHabitList>
          <HabitTile />
          <HabitTile />
          <HabitTile />
          <HabitTile />
        </UnorderedHabitList>
      </HomeContainer>
    </div>
  );
}
