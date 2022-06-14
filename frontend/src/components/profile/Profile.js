import React from "react";

import "./Profile.scss";
import { Link } from "react-router-dom";

const Profile = () => {
  const username = localStorage.getItem("user");

  return (
    <div className="Profile">
      <h1>Manage</h1>
      <div className="Profile__buttons">
        <h2>{username}</h2>
       
          <Link to="/manage-rentals" className="profile-btn btn-1">
            Manage rentals
          </Link>
 
 
          <Link to="/payments" className="profile-btn btn-2">
            Payments history
          </Link>
    
        <Link to="/account-details" className="profile-btn btn-3">
          
            Edit account details
          
        </Link>
      </div>
    </div>
  );
};

export default Profile;
