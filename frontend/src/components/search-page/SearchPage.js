import React, { useState, useEffect } from "react";
import { Container, Card } from "semantic-ui-react";
import "./SearchPage.scss";
import FleetCard from "../fleet/FleetCard";
import axios from "axios";

const SearchPage = () => {
 
  const [cars, setCars] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8000/cars/").then((res) => {
      setCars(res.data);
      console.log(res.data);
    });



  }, []);

  return (
    <div className="SearchPage">
      <Container textAlign="center" className="SearchPage_cont">
        <h1>All available cars</h1>
        <Card.Group className="card-grp">
          {cars.map((car) =>
            car.availability_flag === true ? (
              <FleetCard key={car.id} car={car} />
            ) : null
          )}
        </Card.Group>
      </Container>
    </div>
  );
};

export default SearchPage;
