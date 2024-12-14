import styled from "styled-components";

export const ButtonContainer = styled.a`
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 5px;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 25px;

  background-color: transparent;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* TEXT uchun */

  color: rgba(255, 255, 255, 1);

  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    color: black;
  }
  &:active {
    transform: scale(1.05);
    background-color: transparent;
    color: rgba(255, 255, 255, 1);
    border: 1px solid gray;
  }

  @media (max-width: 768px) {
    padding: 5px 15px;
    font-size: 11px;
  }
`;
