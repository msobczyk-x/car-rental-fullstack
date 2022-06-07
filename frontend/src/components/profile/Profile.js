import React, {useEffect, useState} from "react";
import { Button } from "semantic-ui-react";
import "./Profile.scss";
import {NavLink} from 'react-router-dom';
import axios from "axios";
const Profile = () => {
  const username = localStorage.getItem("user");

  
  
  return (
    <div className="Profile">
      
        <h1>Manage</h1>
        <div className="Profile__buttons">
        
          <h2>{username}</h2>
          <Button color="red" className="btn">
          <NavLink to="/account-details" className="profile-btn" >
            Manage rentals
            
            </NavLink>
          </Button>
          <Button color="blue" className="btn">
        <NavLink to="/account-details" className="profile-btn" >
            Payments
            
            </NavLink>
            </Button>
            <Button color="green" className="btn">
        <NavLink to="/account-details" className="profile-btn" >
            Edit account details
            
        </NavLink>
        </Button>
        </div>
      
    </div>
  );
};

export default Profile;
