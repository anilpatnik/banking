import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  width: 120px;
  height: 50px;
  margin: 0 10px;
  border: 2px solid ${({ color }) => (color ? color : "grey")};
  border-radius: 3px;
`;
