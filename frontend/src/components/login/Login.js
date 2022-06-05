import React, { useState } from "react";
import { Form, Grid, Button } from "semantic-ui-react";
import "./Login.scss";
import { motion } from "framer-motion";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const response = await axios.post("http://localhost:8000/auth/token/", {
      username,
      password
    });
    if (response.status === 200) {

      localStorage.setItem("authTokens", response.data.access);
      localStorage.setItem("user", username);
      navigate("/profile");
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <motion.div
      className="Login"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Grid container divided columns={2}>
        <Grid.Column>
          <h1>Log in</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <input placeholder="Username" 
              onChange={e => setUsername(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Field>
            <Button type="submit">Log in</Button>
          </Form>
        </Grid.Column>
        <Grid.Column>
          <div className="signup-cont">
            <h1>
              or{" "}
              <Link to="/signup" className="sign-btn">
                Sign up
              </Link>
            </h1>
          </div>
        </Grid.Column>
      </Grid>
    </motion.div>
  );
};

export default Login;
