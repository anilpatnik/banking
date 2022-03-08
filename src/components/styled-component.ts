import styled from "styled-components";

export const Button = styled.button`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  cursor: pointer;
  width: 120px;
  height: 50px;
  margin: 0 10px;
  border: 2px solid ${({ color }) => (color ? color : "grey")};
  border-radius: 10px;
`;
