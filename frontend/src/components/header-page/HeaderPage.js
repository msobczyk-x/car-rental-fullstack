import React from "react";
import "./HeaderPage.scss";
import { Header, Container, Icon } from "semantic-ui-react";
import SearchCars from "../search-cars/Search-cars";
const HeaderPage = () => {
  return (
    <div className="HeaderPage">
      
      <Header as="h1">Car Rental – Search, Compare & Save</Header>
      <div className="hd-cont">
        <div className="hd-cont__search">
        <Icon fitted size="big" name='car' />
      <Header as="h4">Compact cars to most luxury ones</Header>
      </div>
      <div className="hd-cont__search">
      <Icon fitted size="big" name='plane' />
      <Header as="h4">Location in 5 major cities in Poland</Header>
      </div>
      <div className="hd-cont__search">
      <Icon fitted size="big" name='language' />
      <Header as="h4">Customer support in 5 languages</Header>
      </div>
     
      </div>
      <SearchCars />
      </div>

  );
};

export default HeaderPage;
