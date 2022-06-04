import React, { useState, useEffect } from "react";
import "./Fleet.scss";
import axios from "axios";
import { Card, Container } from "semantic-ui-react";
import FleetCard from "./FleetCard";
import { motion } from "framer-motion";
const baseURL = "http://localhost:8000/cars/";
const Fleet = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setCars(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <motion.div className="Fleet"
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container className="fleet-cont">
        
        <h1>Cars in our fleet</h1>
        <Card.Group className="card-grp">
          {cars.map((car) => (
        <FleetCard car={car} />
          ))}
        </Card.Group>
      </Container>
    </motion.div>
  );
};

export default Fleet;
