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
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState(0);
  const [pesel, setPesel] = useState(0);
  const navigate = useNavigate();
 
const handleClick = ()  => {
  axios.put(`http://localhost:8000/customers/${user.id}/`, {
    username: username,
    first_name: firstName,
    last_name: lastName,
    phone_number: phone,
    email: email,
    street: address,
    city: city,
    zipcode: zipcode,
    pesel: pesel,
    
}

    )
   
}
  useEffect(() => {
     async function fetchData() {
    await axios.get(`http://localhost:8000/customers/?username=${username}`)
  .then(function (response) {
    // handle success
    
    setUser(response.data[0]);
    setPesel(response.data[0].pesel);
    setFirstName(response.data[0].first_name);
    setLastName(response.data[0].last_name);
    setEmail(response.data[0].email);
    setPhone(response.data[0].phone_number);
    setAddress(response.data[0].street);
    setCity(response.data[0].city);
    setZipcode(response.data[0].zipcode);
    
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
        <Form className="form">
          <Form.Field>
            <label>First name</label>
            <input
              type="text"
              id="first-name"
              onChange={(e) => setFirstName(e.target.value)}
              defaultValue={user.first_name}
              placeholder="First name"
            />
          </Form.Field>
          <Form.Field>
            <label>Last name</label>
            <input
              type="text"
              id="last-name"
              onChange={(e) => setLastName(e.target.value)}
              defaultValue={user.last_name}
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
              defaultValue={user.phone_number}
              
            />
          </Form.Field>
          <Form.Field>
            <label>E-mail</label>
            <input
              type="text"
              id="e-mail"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              defaultValue={user.email}
              
            />
          </Form.Field>
          <Form.Field>
            <label>Street</label>
            <input
              type="text"
              id="Street"
              defaultValue={user.street}
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
              defaultValue={user.city}
              placeholder="City"
            />
          </Form.Field>
          <Form.Field>
            <label>Zipcode</label>
            <input
              type="text"
              id="Zipcode"
              onChange={(e) => setZipcode(e.target.value)}
              defaultValue={user.zipcode}
              placeholder="Zipcode"
            />
          </Form.Field>
         
          <div className="AccountDetails__buttons">
            <Button color="red" type="button" onClick={handleBack}>
              Cancel
            </Button>
            <Button type="submit" color="green" onClick={handleClick}>
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AccountDetails;
