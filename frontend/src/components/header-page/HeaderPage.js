import React, {useRef} from "react";
import "./HeaderPage.scss";
import {  Icon } from "semantic-ui-react";
import SearchCars from "../search-cars/Search-cars";
const HeaderPage = () => {

  const headerRef = useRef();

  return (
    <div className="HeaderPage" ref={headerRef}>
      
      <h1 className="main-title">Car Rental – Search, Compare & Save</h1>
      <div className="hd-cont">
        <div className="hd-cont__search">
        <Icon fitted size="big" name='car' />
      <h4>Compact cars to most luxury ones</h4>
      </div>
      <div className="hd-cont__search">
      <Icon fitted size="big" name='plane' />
      <h4>Location in 5 major cities in Poland</h4>
      </div>
      <div className="hd-cont__search">
      <Icon fitted size="big" name='language' />
      <h4>Customer support in 5 languages</h4>
      </div>
     
      </div>
      <SearchCars />
      </div>

  );
};

export default HeaderPage;
