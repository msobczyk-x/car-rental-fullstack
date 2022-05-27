import React from "react";
import "./HeaderPage.scss";
import { Header, Container, Icon } from "semantic-ui-react";

const HeaderPage = () => {
  return (
    <div className="HeaderPage">
      <Header as="h1">Car Rental – Search, Compare & Save</Header>
      <div className="hd-cont">
        <Container>
        <Icon fitted name='checkmark' />
      <Header as="h4">Compact cars to most luxury ones</Header>
      </Container>
      <Container>
      <Icon fitted name='checkmark' />
      <Header as="h4">Location in 5 major cities in Poland</Header>
      </Container>
      <Container>
      <Icon fitted name='checkmark' />
      <Header as="h4">Customer support in 5 languages</Header>
      </Container>
      </div>
    </div>
  );
};

export default HeaderPage;
