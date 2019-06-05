import React from "react";

import { Logo } from "../Logo";
import { User } from "../User";

import { Container, ItemsContainer } from "./NavBar.styled";

export const NavBar = ({ user }) => {
  return (
    <Container>
      <ItemsContainer>
        <Logo />
        <User user={ user } />
      </ItemsContainer>
    </Container>
  );
};