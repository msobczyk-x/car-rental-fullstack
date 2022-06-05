import React from "react";
import { Button, Container } from "semantic-ui-react";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="Profile">
      <Container>
        <h1>Manage</h1>
        <Button>
            Manage rentals
            
        </Button>
        <Button>
            Payments
            
        </Button>
      </Container>
    </div>
  );
};

export default Profile;
