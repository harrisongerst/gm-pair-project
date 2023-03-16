import styled from "styled-components";

export const TileContainer = styled.div`
  height: 30vh;
  flex-grow: 1;
  list-style-type: none;
  margin: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: antiquewhite;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  font-family: Quicksand, arial, sans-serif;
  img {
    height: 20vh;
    padding-top: 1vh;
    border-radius: 120px;
  }
`;
