import React, {useState } from "react";
import { Form, Button, Container, Label } from "semantic-ui-react";
import "./Signup.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [wrongUsername, setWrongUsername] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [pesel, setPesel] = useState("");
 

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const response = await axios.post("http://localhost:8000/auth/register/", {
      username,
      password,
      password2
    });
    if (response.status === 201) {
        axios.post("http://localhost:8000/customers/", {
         firstName,
          lastName,
          phone,
          email,
          address,
          city,
          zipcode,
          pesel,
    });
      alert("Successfully registered!");
      navigate("/login");
    }
    else if(response.status === 400){
      setWrongUsername(true);
    }
    else {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="Signup">
      <h1>Sign up</h1>
    <Container text width={8}>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <input
            type="text"
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </Form.Field>
        <span className="error">
            {wrongUsername ? (
              <Label pointing prompt color="red" size="large">
                There is already a user with this username
              </Label>
            ) : (
              ""
            )}
          </span>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Re-type passowrd</label>
          <input
            type="password"
            id="confirm-password"
            onChange={e => setPassword2(e.target.value)}
            placeholder="Confirm Password"
            
            required
          />
          {password2 === password ? (
              <Label pointing prompt color="red" size="large">
                Passwords do not match
              </Label>
            ) : (
              ""
            )}
        </Form.Field>
        <Form.Field>
          <label>First name</label>
          <input
            type="text"
            id="first-name"
            onChange={e => setFirstName(e.target.value)}
            placeholder="First name"
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Last name</label>
          <input
            type="text"
            id="last-name"
            onChange={e => setLastName(e.target.value)}
            placeholder="Last name"
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Phone number</label>
          <input
            type="tel"
            id="phone-number"
            onChange={e => setPhone(e.target.value)}
            placeholder="Phone number"
            pattern="+[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{3}"
            required
          />
        </Form.Field>
        <Form.Field>
          <label>E-mail</label>
          <input
            type="text"
            id="e-mail"
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Street</label>
          <input
            type="text"
            id="Street"
            onChange={e => setAddress(e.target.value)}
            placeholder="Street"
            required
          />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input
            type="text"
            id="City"
            onChange={e => setCity(e.target.value)}
            placeholder="City"
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Zipcode</label>
          <input
            type="text"
            id="Zipcode"
            onChange={e => setZipcode(e.target.value)}
            placeholder="Zipcode"
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Pesel number</label>
          <input
            type="number"
            id="Pesel number"
            onChange={e => setPesel(e.target.value)}
            placeholder="Pesel number"
            pattern="[0-9]{11}"
            required
          />
        </Form.Field>
        <Button type="submit">Sign up</Button>
      </Form>
     </Container>
    </div>
  );
};

export default Signup;
