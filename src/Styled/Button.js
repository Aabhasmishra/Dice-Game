import styled from "styled-components";

export const Button = styled.button`
    width: 220px;
    height: 44px;
    background-color: black;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;

    &:hover{
      background-color: white;
      border: 1px solid black;
      color: black;
      transition: 0.3s background ease-in;
    }
`;

export const OutlineButton = styled(Button)`    // --> All the propertys of "Button" passes in "OutlineButton"
  background-color: white;
  border: 1px solid black;
  color: black;

  &:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
