import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 11px 0;
  width: 100%;
  max-width: 320px;
  
  @media (min-width: 640px) {
    max-width: 640px;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  @media (min-width: 960px) {
    max-width: 960px;
  }

  @media (min-width: 1126px) {
    max-width: 1126px;
  }
`;

export const RestaurantCountContainer = styled.div`
  width: 100%;
  margin: 10px 10px 20px;
  @media (max-width: 640px) {
    display: none;
  }
`;