import React, { useEffect, useState } from "react";
import { HomeContainer } from "./Home.styled";
import HabitTile from "../../components/HabitTile/HabitTile";
import axios from "axios";

export interface HabitData {
  habit_name: string;
  icon: string;
  start_date: string;
  description: string;
}

export default function Home() {
  const [data, setData] = useState<HabitData[]>([]);
  // const fetchData = async () => {
  //   const newData = await fetch("dummyData.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   });
  //   const jsonData = newData.json();
  // };
  useEffect(() => {
    axios.get("dummyData.json").then((res) => {
      setData(res.data);
    });

  }, []);

  return (
    <HomeContainer>
      {data.map((habit) => {
        return (
          <HabitTile {...habit} />
        )
      })}
    </HomeContainer>
  );
}
