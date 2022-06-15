import React, { useState } from "react";
import "./Payments.scss";
import axios from "axios";
import { Button, Form, Icon, Container } from "semantic-ui-react";
import Cards from "react-credit-cards";
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,

  } from './utils';
import moment from "moment";

import { useNavigate } from "react-router-dom";
const Payments = () => {
    const navigate = useNavigate();
  const bookingId = localStorage.getItem("rentalId");
  const rentalPrice = localStorage.getItem("rentalPrice");
  const [cvc, setCvc] = useState("");
  const [exp, setExp] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [issuer, setIssuer] = useState("");
  const [number, setNumber] = useState("");
  const [success, setSuccess] = useState(false);

    const handleCallback = ({issuer}, isValud) => {
        if (isValud) {
            setIssuer(issuer);
        }
    }

    const handleCancel = () => {
        localStorage.removeItem("rentalId");
        localStorage.removeItem("rentalPrice");
        navigate("/manage-rentals");
        
    }

    const handlePay = () => {
        axios.post("http://localhost:8000/payments/", {
            booking: bookingId,
            total_amount: rentalPrice,
            discount_amount: 0,
            payment_status: true,
            payment_date: moment().format("YYYY-MM-DD"),
            payment_time: moment().format("HH:mm:ss"),
            payment_type: "credit_card",
        }).then(res => {
            if (res.status === 201) {
                
                axios.patch(`http://localhost:8000/bookings/${bookingId}/`, {
                    payment_status: true,
            })
                setSuccess(true);
                localStorage.removeItem("rentalId");
                localStorage.removeItem("rentalPrice");
                setTimeout(() => {
                    navigate("/manage-rentals");
                  }, 2000);
            }
            else {
                alert("Something went wrong!");
              }
        })

    }


  return (
    <div className="Payments">
      <div className="main-container">
      {success ? (
            <Container centered fluid textAlign="center">
            <h1>Booked succesfully !</h1>
            <Icon name="checkmark" size="massive" color="green" />
            <h5>You'll be redirected in few seconds !</h5>
          </Container>
        ):(<>
        <h2>Payment ID: #{bookingId}</h2>
        <Cards
          cvc={cvc}
          expiry={exp}
          focused={focus}
          name={name}
          number={number}
          issuer={issuer}
          preview={true}
          callback={handleCallback}
        
        />
        <Form className="form">
          <div className="form-group">
            <Form.Input
              type="tel"
              fluid
              label="Card number"
              onChange={(e) => {
                
                e.target.value = formatCreditCardNumber(e.target.value);
                setNumber(e.target.value);
            }
            }
              name="number"
              onFocus={(e) => setFocus(e.target.name)}
              pattern="[\d| ]{16,22}"
            />
            <Form.Input
              fluid
              label="Name"
              name="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              pattern="[a-zA-Z ]{2,}"
            />
          </div>
          <div className="form-group-2">
            <Form.Input
            name="exp"
              label="Expiration date"
              pattern="\d\d/\d\d"
              className="form-inp2"
              onChange={(e) => {
                
                e.target.value= formatExpirationDate(e.target.value)
                setExp(e.target.value);
            }}
              onFocus={(e) => setFocus(e.target.name)}
            />
            <Form.Input
              label="CVC"
              name="cvc"
              className="form-inp2"
              pattern="\d{3,4}"
              onChange={(e) => {
                e.target.value = formatCVC(e.target.value);
                setCvc(e.target.value);
            }}

              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <Button.Group className="btn-grp">
          
          <Button fluid color="red" onClick={handleCancel}>CANCEL</Button>
          <Button fluid color="blue" onClick={handlePay}>PAY</Button>
          </Button.Group>
        </Form>
        </>
        )}
      </div>
        
    </div>
  );
};
export default Payments;
