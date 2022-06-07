import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import "./AccountDetails.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AccountDetails = () => {
  const username = localStorage.getItem("user");
  const [user, setUser] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [pesel, setPesel] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      zipcode,
      pesel
    );
  };

  useEffect(() => {
     async function fetchData() {
    await axios.get(`http://localhost:8000/customers/?username=${username}`)
  .then(function (response) {
    // handle success
    
    setUser(response.data[0]);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}
fetchData();
//eslint-disable-next-line
  }, []);



  const handleBack = () => {
    navigate("/profile");
  };
  return (
    <div className="AccountDetails">
      <div className="AccountDetails__container">
        <h1>Change account details</h1>
        <Form onSubmit={handleSubmit} className="form">
          <Form.Field>
            <label>First name</label>
            <input
              type="text"
              id="first-name"
              onChange={(e) => setFirstName(e.target.value)}
              value={user.first_name}
              placeholder="First name"
            />
          </Form.Field>
          <Form.Field>
            <label>Last name</label>
            <input
              type="text"
              id="last-name"
              onChange={(e) => setLastName(e.target.value)}
              value={user.last_name}
              placeholder="Last name"
            />
          </Form.Field>
          <Form.Field>
            <label>Phone number</label>
            <input
              type="tel"
              id="phone-number"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
              value={user.phone_number}
              pattern="+[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{3}"
            />
          </Form.Field>
          <Form.Field>
            <label>E-mail</label>
            <input
              type="text"
              id="e-mail"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              value={user.email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </Form.Field>
          <Form.Field>
            <label>Street</label>
            <input
              type="text"
              id="Street"
              value={user.street}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Street"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              type="text"
              id="City"
              onChange={(e) => setCity(e.target.value)}
              value={user.city}
              placeholder="City"
            />
          </Form.Field>
          <Form.Field>
            <label>Zipcode</label>
            <input
              type="text"
              id="Zipcode"
              onChange={(e) => setZipcode(e.target.value)}
              value={user.zipcode}
              placeholder="Zipcode"
            />
          </Form.Field>
          <Form.Field>
            <label>Pesel number</label>
            <input
              type="number"
              id="Pesel number"
              onChange={(e) => setPesel(e.target.value)}
              value={user.pesel}
              placeholder="Pesel number"
              pattern="[0-9]{11}"
            />
          </Form.Field>
          <div className="AccountDetails__buttons">
            <Button color="red" type="button" onClick={handleBack}>
              Cancel
            </Button>
            <Button type="submit" color="green">
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AccountDetails;
