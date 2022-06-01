import React from "react";

import { Container, Grid, Icon } from "semantic-ui-react";
import "./About.scss";
const About = () => {
  return (
    <div className="About" id="about">
      <Container>
        <h1 className="title-h1">About our company</h1>

        <Grid container columns={3} className="icons-grid">
          <Grid.Column>
            <Icon name="car" size="huge" color="red" />
            <h3>Huge variety</h3>
            <p>
              Everyone can find something that he/she likes. You'll be able to
              choose the car you want, with any budget.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Icon name="clock outline" size="huge" color="red" />
            <h3>24/7 helpdesk</h3>
            <p>
              We have team that works 24/7 to help you with any questions you
              may have.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Icon name="calendar alternate" size="huge" color="red" />
            <h3>Minimum formalities</h3>
            <p>
              We have a minimum formalities for all our customers. So, that you
              can be sure that you will be satisfied with our service.
            </p>
          </Grid.Column>
        </Grid>
        <div className="about-cont">
          <Grid container columns={2} divided className="about-grid">
            <Grid.Column width={8}>
              <h1>Our history</h1>
              <p>
                A car rental, hire car or car hire agency is a company that
                rents automobiles for short periods of time to the public,
                generally ranging from a few hours to a few weeks. It is often
                organized with numerous local branches (which allow a user to
                return a vehicle to a different location), and primarily located
                near airports or busy city areas and often complemented by a
                website allowing online reservations. Car rental agencies
                primarily serve people who require a temporary vehicle, for
                example, those who do not own their own car, travelers who are
                out of town, or owners of damaged or destroyed vehicles who are
                awaiting repair or insurance compensation.
              </p>
            </Grid.Column>
            <Grid.Column width={8}>
              <h1>Why us</h1>
              <p>
                We are a company that has been in the market for a long time. We
                are always ready to help you with any questions you may have.
                National Car Rental, a sister company of Alamo and Enterprise,
                has been praised for its customer service. It also has a wide
                variety of vehicles to rent, from little compact cars to Chevy
                cargo vans. National’s offerings and programs are aimed
                primarily at business travelers, with companies taking advantage
                of the company’s business rental program. The business rental
                program allows employees—at any sized company—to rent a vehicle
                for a fixed period of time, and then return the vehicle to the
                company. The company can then rent the vehicle to other
                employees, or to other companies.
              </p>
            </Grid.Column>
          </Grid>
        </div>
        <Grid centered container columns="equal" className="partners-grid">
          <h1>Partners</h1>
          <div className="partners-cont">
            <img
              src="./images/partner_logo_1.png"
              className="partner-image"
              alt="partner"
            />

            <img
              src="./images/partner_logo_2.png"
              className="partner-image"
              alt="partner"
            />

            <img
              src="./images/partner_logo_3.png"
              className="partner-image"
              alt="partner"
            />

            <img
              src="./images/partner_logo_4.png"
              className="partner-image"
              alt="partner"
            />

            <img
              src="./images/partner_logo_5.png"
              className="partner-image"
              alt="partner"
            />
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
