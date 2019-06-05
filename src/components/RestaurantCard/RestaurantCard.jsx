import React from "react";

import { priceDisplay } from "../../base/constants";
import { MiniSecondary } from "../Text";

import { Container, DetailsContainer, Image, RestaurantName } from "./RestaurantCard.styled";

export const RestaurantCard = ({ restaurant }) => {
  const { name, image, url, price, tags } = restaurant;

  const renderTags = () => {
    let tempTags = [ ...tags ];
    tempTags.push(priceDisplay[price]);

    const formattedTags = tempTags.join(" \xB7 ");
    return <MiniSecondary>{ formattedTags }</MiniSecondary>;
  };

  return (
    <Container>
      <a href={ url } target="_blank" rel="noopener noreferrer">
        <Image src={ image } alt={ name } />
      </a>
      <DetailsContainer>
        <RestaurantName>{ name }</RestaurantName>
        { renderTags() }
      </DetailsContainer>
    </Container>
  );
};