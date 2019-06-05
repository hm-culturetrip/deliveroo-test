import React from "react";

import { Button } from "../Button";
import { BodyLink, BodySemi, Heading } from "../Text";

import { ButtonContainer, Container, LocationContainer } from "./LocationDisplay.styled";

export const LocationDisplay = ({ location, changeLocationClicked }) => {
  return (
    <Container>
      <LocationContainer>
        <BodySemi>Location</BodySemi>
        <Heading>{location}</Heading>
      </LocationContainer>
      <ButtonContainer>
        <Button onClick={() => changeLocationClicked(location)}>
          <BodyLink>Change location</BodyLink>
        </Button>
      </ButtonContainer>
    </Container>
  );
}