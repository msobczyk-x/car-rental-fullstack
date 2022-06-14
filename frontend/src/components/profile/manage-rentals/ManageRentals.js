import React from "react";
import "./ManageRentals.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {Table, Header, Button}  from 'semantic-ui-react';
import { useNavigate } from "react-router-dom";
const ManageRentals = () => {
    const username=localStorage.getItem("user");

    const [rentals, setRentals] = useState([]);
    const [cars, setCars] = useState([]);
    const [locations, setLocations] = useState([]);
 
    
    const handleCancelBooking = (rentalId) => {
        axios.delete(`http://localhost:8000/bookings/${rentalId}/`)
        .then(res => {
            console.log(res);
            window.location.reload();

        }
        )
        .catch(err => {
            console.log(err);
        }
        )
    }

    
    useEffect(() => {
        axios.get(`http://localhost:8000/locations/`).then(res => {
            setLocations(res.data);
        });

        axios.get(`http://localhost:8000/cars/`).then(res => {
            setCars(res.data);
        });
        axios.get(`http://localhost:8000/customers/?username=${username}`).then(res => {
            axios.get(`http://localhost:8000/bookings/?userId=${res.data[0].id}`).then(respo => {
                setRentals(respo.data);
    });})
    }, []);

    return (
        <div className="ManageRentals">
            
            <div className="main-container">
            <Header as="h1">Manage Rentals</Header>
            <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>No</Table.HeaderCell>
        <Table.HeaderCell>Car</Table.HeaderCell>
        <Table.HeaderCell>Pick-up location</Table.HeaderCell>
        <Table.HeaderCell>Pick-up date</Table.HeaderCell>
        <Table.HeaderCell>Pick-up time</Table.HeaderCell>
        <Table.HeaderCell>Drop-off location</Table.HeaderCell>
        <Table.HeaderCell>Drop-off date</Table.HeaderCell>
        <Table.HeaderCell>Drop-off time</Table.HeaderCell>
        <Table.HeaderCell>Total Amount</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      
        {rentals.map((rental) => (
            <Table.Row>
            <Table.Cell>{rental.id}</Table.Cell>
            <Table.Cell>{cars.map((car) => car.id === rental.car ?  car.brand_name + " " + car.model_name : null)}</Table.Cell>
            <Table.Cell>{locations.map((location) => (
                location.id === rental.pickup_location ? location.location_name : null
            ))}</Table.Cell>
            <Table.Cell>{rental.from_date}</Table.Cell>
            <Table.Cell>{rental.from_time}</Table.Cell>
            <Table.Cell>{locations.map((location) => (
                location.id === rental.drop_location ? location.location_name : null
            ))}</Table.Cell>
            <Table.Cell>{rental.ret_date}</Table.Cell>
            <Table.Cell>{rental.ret_time}</Table.Cell>
            <Table.Cell>{rental.amount} $</Table.Cell>
            <Table.Cell><Button color="red" onClick={e => {handleCancelBooking(rental.id)}}>Cancel booking</Button></Table.Cell>
            </Table.Row>
        ))}

      
    </Table.Body>
  </Table>
  </div>
        </div>
    );

    }
export default ManageRentals;