import React, {useEffect, useState} from "react";
import "./FleetCard.scss";
import { Button, Card, Image } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FleetCard = ({ car }) => {
  const authTokens = localStorage.getItem("authTokens");
  const [carCategories, setCarCategories] = useState([]);
  
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8000/categories/"+car.car_category+"/").then((res) => {
      setCarCategories(res.data);
      console.log(res.data);
    });
    //eslint-disable-next-line
  }, []);

  const handleClick = () => {
    navigate("/login");
  };

  const handleRent = () => {
    localStorage.setItem("carChoiceId", car.id);
    localStorage.setItem("carPricePerDay", carCategories.cost_per_day);
    localStorage.setItem("carName", car.brand_name+" "+car.model_name);
    navigate("/rent-summary");
  }
  
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
          {
            authTokens ? (
              <Card.Content extra>
              <Button onClick={handleRent}>Rent</Button>
              <p>Cost: {carCategories.cost_per_day} $/day</p>
            </Card.Content>
            )
          : (<Card.Content extra><Button onClick={handleClick}>Log in to rent </Button></Card.Content>)
          
          }
         
          </Card>



  </div>
  
  );
};

export default FleetCard;
