import React from "react";

import data from "./assets/data/restaurants.json"

import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { RestaurantList } from "./components/RestaurantList";

import { Container } from "./App.styled";

function App() {
  const location = "Fitzrovia";
  const User = "Jane Smith";
  const restaurantList = data.restaurants;

  const changeLocationClicked = (currentLocation) => {
    alert(`Current location is: ${ currentLocation }`); //placeholder action
  };

  return (
    <Container>
      <NavBar user={ User } />
      <Header location={ location } changeLocationClicked={ ( currentLocation ) => changeLocationClicked(currentLocation) } />
      <RestaurantList restaurantList={restaurantList} />
    </Container>
  );
}

export default App;
