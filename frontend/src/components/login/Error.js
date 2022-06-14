import React from "react";
import { Message } from "semantic-ui-react";

const Error = (message) => {
    return (
        <Message negative>
        
        <p>Password doesn't match</p>
      </Message>
        );
    }
export default Error;
