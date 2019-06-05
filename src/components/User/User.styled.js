import styled from "styled-components";

import { Body } from "../Text";

export const Container = styled.div`
  display: flex;
  margin: 0 15px;
  align-items: center;
`;

export const Image = styled.img`
  height: 24px;
  width: 24px;

  @media (min-width: 640px) {
    height: 15px;
    width: 14px;
  }
`;

export const UserName = styled(Body)`
  margin-left: 10px;
  @media (max-width: 639px) {
    display: none;
  }
`;