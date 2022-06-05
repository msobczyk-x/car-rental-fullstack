import React from "react";
import "./FleetCard.scss";
import { Button, Card, Image } from "semantic-ui-react";

const FleetCard = ({ car }) => {
  const authTokens = localStorage.getItem("authTokens");
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
          {
            authTokens ? (
              <Card.Content extra>
              <Button>Rent</Button>
            </Card.Content>
            )
          : null
          
          }
         
          </Card>



  </div>
  
  );
};

export default FleetCard;
