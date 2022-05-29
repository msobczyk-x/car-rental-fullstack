import React from "react";

import { Container, Grid, Icon } from "semantic-ui-react";
import "./About.scss";
const About = () => {
  return (
    <div className="About">
      <Container>
        <h1 className="title-h1">About our company</h1>

        <Grid container columns={3} className="icons-grid">
          <Grid.Column>
            <Icon name="car" size="huge" color="red" />
            <h3>Huge variety</h3>
            <p>
              Wynajmujemy auta praktycznie na każdą okazję: podróże, wesela,
              przeprowadzki czy pomoc drogowa.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Icon name="clock outline" size="huge" color="red" />
            <h3>24/7 helpdesk</h3>
            <p>
              Wynajmujemy auta praktycznie na każdą okazję: podróże, wesela,
              przeprowadzki czy pomoc drogowa.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Icon name="calendar alternate" size="huge" color="red" />
            <h3>Minimum formalities</h3>
            <p>
              Wynajmujemy auta praktycznie na każdą okazję: podróże, wesela,
              przeprowadzki czy pomoc drogowa.
            </p>
          </Grid.Column>
        </Grid>
        <Grid container columns={2} divided className="about-grid">
          <Grid.Column width={8}>
            <h1>What is Lorem Ipsum?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Grid.Column>
          <Grid.Column width={8}>
            <h1>What is Lorem Ipsum?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
