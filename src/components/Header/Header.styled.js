import styled from "styled-components";

import { colors } from "../../base/constants";

export const Container = styled.div`
  margin: 0 10px 15px;
  height: 136px;
  background-color: ${ colors.primary };
  width: 100%;
  display: flex;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;

  @media (min-width: 639px) {
    flex: 1;
  }
`;