import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  width: 230px;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 20px;
  border: 2px solid transparent;
  transition: 0.3s background ease-in;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
    transition: 0.2s background ease-in;
    cursor: pointer;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 2px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 2px solid transparent;
    
  }
`;
