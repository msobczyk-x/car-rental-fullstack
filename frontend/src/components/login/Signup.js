import React, {useState } from "react";
import { Form, Button, Container } from "semantic-ui-react";
import "./Signup.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

 

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

      alert("Successfully registered!");
      navigate("/login");
    } else {
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
          <p>{password2 !== password ? "Passwords do not match" : ""}</p>
        </Form.Field>
        <Button type="submit">Sign up</Button>
      </Form>
     </Container>
    </div>
  );
};

export default Signup;
