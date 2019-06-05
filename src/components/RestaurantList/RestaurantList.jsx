import React from "react";

import { BodyBold } from "../Text";
import { RestaurantCard } from "../RestaurantCard";

import { Container, RestaurantCountContainer } from "./RestaurantList.styled";

export const RestaurantList = ({ restaurantList }) => {
  const restaurantCount = restaurantList.length;

  return(
    <Container>
      <RestaurantCountContainer>
        <BodyBold>{ restaurantCount } Restaurants</BodyBold>
      </RestaurantCountContainer>
      { restaurantList.map(restaurant => <RestaurantCard key={ restaurant.id } restaurant={ restaurant } />) }
    </Container>
  );
};