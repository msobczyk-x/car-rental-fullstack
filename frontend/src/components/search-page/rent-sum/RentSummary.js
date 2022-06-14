import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table, Header, Container, Icon } from "semantic-ui-react";
import "./RentSummary.scss";

const RentSummary = () => {
    const [success, setSuccess] = useState(false);
  const fromDate = localStorage.getItem("fromDate");
  const retDate = localStorage.getItem("retDate");
  const fromTime = localStorage.getItem("fromTime");
  const retTime = localStorage.getItem("retTime");
  const username = localStorage.getItem("user");
  const fromLocation = localStorage.getItem("fromLocation");
  const fromLocationName = localStorage.getItem("fromLocationName");
  const carId = localStorage.getItem("carChoiceId");
  const toLocation = localStorage.getItem("toLocation");
  const toLocationName = localStorage.getItem("toLocationName");
  const carPricePerDay = localStorage.getItem("carPricePerDay");
  const carName = localStorage.getItem("carName");
  const [amount, setAmount] = useState(0);
  const [userId,setUserId] = useState([]);
    const getUserId = async () => {
        const response = await axios.get(`http://localhost:8000/customers/?username=${username}`);
        setUserId(response.data[0].id);
        console.log(response.data[0]);
        console.log(`USERID: ${response.data[0].id}`);
    }

    const navigate = useNavigate();

   const handleCancel = () => {
    localStorage.removeItem("fromDate");
    localStorage.removeItem("retDate");
    localStorage.removeItem("fromTime");
    localStorage.removeItem("retTime");
    localStorage.removeItem("fromLocation");
    localStorage.removeItem("carChoiceId");
    localStorage.removeItem("toLocation");
    localStorage.removeItem("carPricePerDay");
    localStorage.removeItem("amount");
    navigate("/");
   }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:8000/bookings/", {
      customer: userId,
      car: carId,
      from_date: fromDate,
      ret_date: retDate,
      from_time: fromTime,
      ret_time: retTime,
      amount: amount,
      pickup_location: fromLocation,
      drop_location: toLocation,
    });
    if (response.status === 201) {
        localStorage.removeItem("fromDate");
        localStorage.removeItem("retDate");
        localStorage.removeItem("fromTime");
        localStorage.removeItem("retTime");
        localStorage.removeItem("fromLocation");
        localStorage.removeItem("carChoiceId");
        localStorage.removeItem("toLocation");
        localStorage.removeItem("carPricePerDay");
        localStorage.removeItem("amount");
        setSuccess(true);
        setTimeout(() => {
            navigate("/");
          }, 2000);
        
    } else {
      alert("Something went wrong!");
    }
  };

  const handleAmount = () => {
    const fromDate = new Date(localStorage.getItem("fromDate"));
    const retDate = new Date(localStorage.getItem("retDate"));
    const diff = retDate.getTime() - fromDate.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) ;
    
    setAmount(days * carPricePerDay);
    
    }

  useEffect (() => {
    getUserId();
    handleAmount();
    //eslint-disable-next-line
    }, []);

  return (
    <div className="RentSummary">
        {success ? (
            <Container centered fluid textAlign="center">
            <h1>Booked succesfully !</h1>
            <Icon name="checkmark" size="massive" color="green" />
            <h5>You'll be redirected in few seconds !</h5>
          </Container>
        ): (
        <div className="Container-main" fluid>
        <h1>Rent summary</h1>
        <p>Car: {carName}</p>
        <div className="Container-main-inner">
        <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine></Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Time</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h3' textAlign='center'>
            Pick-up
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>{fromLocationName}</Table.Cell>
        <Table.Cell>
          {fromDate}
        </Table.Cell>
        <Table.Cell >
          {fromTime}
        </Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h3' textAlign='center'>
            Drop-off
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>{toLocationName}</Table.Cell>
        <Table.Cell>
          {retDate}
        </Table.Cell>
        <Table.Cell >
          {retTime}
        </Table.Cell>
       
      </Table.Row>
    </Table.Body>
  </Table>
        <p>Total amount: <span className="amount">{amount} $</span></p>


        </div>
        <div className="btn-cont" fluid>
          <Button color="red" onClick={handleCancel}>Cancel</Button>
          <Button color="green" onClick={handleSubmit}>Accept</Button>
        </div>

        
      </div>
        )}
      
      
    </div>
  );
};
export default RentSummary;
