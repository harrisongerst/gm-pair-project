import styled from "styled-components";

interface HabitProps {
  maxAmount: number;
  count: number;
  isBadHabit: boolean;
}


export const TileContainer = styled.div<HabitProps>`
  list-style-type: none;
  margin: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => {
    if(props.isBadHabit){
      if(props.count === props.maxAmount){
        return "red"
      } else {
        return "green"
      }
    }
    if(!props.isBadHabit){
      if(props.count === props.maxAmount){
        return "green"
      } else {
        return "white"
      }
    }
  }};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  font-family: Quicksand, arial, sans-serif;
  padding: 0.5em;
  img {
    height: 20vh;
    padding-top: 1vh;
    border-radius: 120px;
  }
`;
