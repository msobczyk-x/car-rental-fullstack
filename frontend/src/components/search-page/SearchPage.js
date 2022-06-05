import React, { useState, useEffect } from "react";
import { Container, Card } from "semantic-ui-react";
import "./SearchPage.scss";
import FleetCard from "../fleet/FleetCard";
import axios from "axios";

const SearchPage = () => {
  const baseURL = "http://localhost:8000/cars/";
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setCars(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="SearchPage">
      <Container>
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
