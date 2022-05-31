import React from "react";
import { Button, Container, Form, Input, TextArea } from "semantic-ui-react";
import "./Contact.scss";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div className="Contact"
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container className="contact-cont">
        <h1>Contact</h1>
        <Form>
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            label="First name"
            placeholder="First name"
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Last name"
            placeholder="Last name"
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Opinion"
            placeholder="Opinion"
          />
          <Form.Field
            id="form-input-control-error-email"
            control={Input}
            label="Email"
            placeholder="joe@schmoe.com"
          />
          <Button type="submit">Send</Button>
        </Form>
      </Container>
    </motion.div>
  );
};

export default Contact;
