import styled from "styled-components";

export const OpenerContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Left = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Right = styled.div`
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainText = styled.div``;
