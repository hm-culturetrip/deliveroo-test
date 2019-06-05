import React from "react";

import { LocationDisplay } from "../LocationDisplay";

import { Container, ItemsContainer } from "./Header.styled";

export const Header = ({ location, changeLocationClicked }) => {
  return (
    <Container>
      <ItemsContainer>
        <LocationDisplay
          location={location}
          changeLocationClicked={changeLocationClicked}
        />
      </ItemsContainer>
    </Container>
  );
};