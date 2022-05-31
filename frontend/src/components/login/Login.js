import React from "react";
import { Form, Grid, Button } from "semantic-ui-react";
import "./Login.scss";
import { motion } from "framer-motion";
const Login = () => {

    function handleClick() {
        console.log("clicked");
    };

  return (
    <motion.div className="Login"
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
     
      
      <Grid container divided columns={2}>
        <Grid.Column>

            <h1>
                Log in
            </h1>
            
        <Form>
            <Form.Field>
              <label>Username</label>
              <input placeholder="Username" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder="Password" />
            </Form.Field>
            <Button type="submit">Log in</Button>
          </Form>
          </Grid.Column>
            <Grid.Column>
            <div className="signup-cont">
            <h1>
                or <Button type="submit" className="sign-btn" onClick={handleClick()}>Sign up</Button>
            </h1>
            </div>
            </Grid.Column>
          </Grid>
    </motion.div>
  );
};

export default Login;



