import React from "React";
import { Form, Grid, Button } from "semantic-ui-react";
import "./Signup.scss";

const Signup = () => {
  return (
    <div className="Signup">
      <h1>Sign up</h1>

      <Form>
        <Form.Field>
          <label>Username</label>
          <input placeholder="Username" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" />
        </Form.Field>
        <Form.Field>
          <label>Re-type passowrd</label>
          <input placeholder="Password" />
        </Form.Field>
        <Button type="submit">Sign up</Button>
      </Form>
    </div>
  );
};

export default Signup;
