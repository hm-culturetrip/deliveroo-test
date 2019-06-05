import React from "react";

import logo from "../../assets/svgs/logo-horizontal.svg";

import { Container } from "./Logo.styled";

export const Logo = () => {
  return(
    <Container>
      <img src={ logo } alt="logo" height={27} />
    </Container>
  );
};