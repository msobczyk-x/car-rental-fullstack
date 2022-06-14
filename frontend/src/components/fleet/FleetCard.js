import React, {useEffect, useState} from "react";
import "./FleetCard.scss";
import {  Card, Image } from "semantic-ui-react";
import axios from "axios";
const FleetCard = ({ car }) => {

  const [carCategories, setCarCategories] = useState([]);
  

  useEffect(() => {
    axios.get("http://localhost:8000/categories/"+car.car_category+"/").then((res) => {
      setCarCategories(res.data);
      console.log(res.data);
    });
    //eslint-disable-next-line
  }, []);


  return (
  <div className="FleetCard">
        
          <Card>
          <Image src={car.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{car.brand_name + " " + car.model_name}</Card.Header>
            <Card.Meta>
              <span className="date">{car.production_year}</span>
              <span className="date">{carCategories.category_name}</span>
            </Card.Meta>
            <Card.Description>
              <p>{car.description}</p>
            <p>Horse power: {car.horse_power}</p>
            <p>Fuel consumption: {car.fuel_consumption}</p>
            <p>Horse power: {car.horse_power}</p>
            
            </Card.Description>
          </Card.Content>
         
         
          </Card>



  </div>
  
  );
};

export default FleetCard;
