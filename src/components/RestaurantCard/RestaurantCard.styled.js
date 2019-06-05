import styled from "styled-components";

import { HeadingSmall } from "../Text";

export const Container = styled.div`
  width: 288px;
  height: 224px;
  display: flex;
  flex-direction: column;
  margin: 5px 10px 10px;

  @media (min-width: 1126px) {
    width: 354px;
    height: 262px;
  }
`;

export const Image = styled.img`
  height: 164px;
  width: 100%;

  @media (min-width: 1126px) {
    width: 354px;
    height: 202px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 124px;
  width: 100%;
  margin-top: 4px;
`;

export const RestaurantName = styled(HeadingSmall)`
  height: 30px;
  overflow: hidden;
  text-overflow: elipses;
`;