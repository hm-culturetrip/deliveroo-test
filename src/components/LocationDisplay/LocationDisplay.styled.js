import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 15px;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 960px) {
    margin: 0 75px;
  }

`;

export const LocationContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ButtonContainer = styled.div`
  padding: 5px;
`;