import React from "react";
import "./FleetCard.scss";
import { Card, Image } from "semantic-ui-react";

const FleetCard = ({ car }) => {
  return (
  <div className="FleetCard">
        
          <Card>
          <Image src={car.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{car.brand_name + " " + car.model_name}</Card.Header>
            <Card.Meta>
              <span className="date">{car.production_year}</span>
            </Card.Meta>
            <Card.Description>{car.description}</Card.Description>
          </Card.Content>
          </Card>



  </div>
  
  );
};

export default FleetCard;
