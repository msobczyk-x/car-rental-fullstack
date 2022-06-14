import React from "react";
import "./AnimatedRoutes.scss";
import {Routes, Route, useLocation} from "react-router-dom";
import Main from "../main-home/Main";
import Login from "../login/Login";
import Fleet from "../fleet/Fleet";
import Profile from "../profile/Profile";
import {AnimatePresence} from 'framer-motion';
import Contact from "../contact/Contact";
import SearchPage from "../search-page/SearchPage";


import Signup from "../login/Signup";
import AccountDetails from "../profile/account-details/AccountDetails";
import Payments from "../profile/payments/Payments";
import ManageRentals from "../profile/manage-rentals/ManageRentals";
import RentSummary from "../search-page/rent-sum/RentSummary";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
       
        
        <Route exact path="/" element={<Main/>}/>

          <Route path="/fleet" element={<Fleet/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/search-cars" element={<SearchPage/>}/>
          <Route path="/account-details" element={<AccountDetails/>}/>
          <Route path="/payments" element={<Payments/>}/>
          <Route path="/manage-rentals" element={<ManageRentals/>}/>
          <Route path="/rent-summary" element={<RentSummary/>}/>
          </Routes>
          </AnimatePresence>

    );
}
export default AnimatedRoutes;