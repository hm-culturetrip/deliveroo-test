import React from "react";

import userIcon from "../../assets/svgs/user-icon.svg";

import { Container, Image, UserName } from "./User.styled";

export const User = ({ user }) => {
  return (
    <Container>
      <Image src={ userIcon } alt="user" />
      <UserName>{ user }</UserName>
    </Container>
  );
};