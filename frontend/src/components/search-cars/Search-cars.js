import React, { useEffect, useState } from "react";
import "./Search-cars.scss";
import { Form, Button, Icon, Label } from "semantic-ui-react";
import moment from "moment";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseURL = "http://localhost:8000/locations/";
const SearchCars = () => {
  const [options, setOptions] = useState([]);
  const [fromDate, setFromDate] = useState(moment().format("YYYY-MM-DD"));
  const [retDate, setRetDate] = useState(moment().format("YYYY-MM-DD"));
  const [fromTime, setFromTime] = useState(moment().format("HH:MM"));
  const [retTime, setRetTime] = useState(moment().format("HH:MM"));
  const [fromLocation, setFromLocation] = useState([]);
  const [toLocationName, setToLocationName] = useState([]);
  const [fromLocationName, setFromLocationName] = useState([]);
  const [toLocation, setToLocation] = useState([]);
  const [validatedDate, setValidatedDate] = useState(false);
  const [validatedLocation, setValidatedLocation] = useState(false);
  const [visibilityDate, setVisibilityDate] = useState(false);
  const [visibilityLocation, setVisibilityLocation] = useState(false);
  /* const [locations, setLocations] = useState([]);  */
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      /*     setLocations(res.data); */
      console.log(res.data);
      setOptions(
        res.data.map((location) => ({
          key: location.id,
          text: location.location_name,
          value: location.id,
        }))
      );
    });
  }, []);

  const validateData = (fd,rd, fl,rl) => {
    const fromDate = new Date(fd);
    const retDate = new Date(rd);
    const diff = retDate.getTime() - fromDate.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    console.log(days);
    console.log(`FL : ${typeof(fl)}`);
    console.log(`RL : ${typeof(rl)}`);
    if (days > 0) {
      setValidatedDate(true);
      setVisibilityDate(false);
    }
    else {
      setVisibilityDate(true);
    }
  
    if (typeof(fl)==="string" && typeof(rl)==="string") {
      setValidatedLocation(true);
      setVisibilityLocation(false);
    }
    else {
      setVisibilityLocation(true);
    }
  }

  const handleClick = (fd, rd, fl, rl) => {
    validateData(fd, rd, fl, rl);
    if (validatedDate === true && validatedLocation === true) {
      localStorage.setItem("fromDate", fromDate);
      localStorage.setItem("retDate", retDate);
      localStorage.setItem("fromLocation", fromLocation);
      localStorage.setItem("toLocation", toLocation);
      localStorage.setItem("fromLocationName", fromLocationName);
      localStorage.setItem("toLocationName", toLocationName);
      localStorage.setItem("fromTime", fromTime);
      localStorage.setItem("retTime", retTime);
      navigate("/search-cars");
    }
    
     
  };

  return (
    <div className="SearchCars">
      <h1>Rent a car with us !</h1>
      <Form>
        <Form.Group>
          <Form.Field>
            <Form.Select
              className="form-input select"
              label="Pick-up location"
              options={options}
              onChange={(e, { value }) => {
                setFromLocation(value);
                setFromLocationName(
                  options.filter((option) => option.value === value)[0].text
                );
              }}
              placeholder="Location"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              className="form-input"
              label="Pick-up date"
              type="date"
              defaultValue={moment().format("YYYY-MM-DD")}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="form-cont">
            <Form.Input
              className="form-input"
              label="Pick-up time"
              type="time"
              defaultValue={moment().format("HH:MM")}
              onChange={(e) => setFromTime(e.target.value)}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field>
            <Form.Select
              className="form-input select"
              label="Drop-off location"
              options={options}
              placeholder="Location"
              onChange={(e, { value }) => {
                setToLocation(value);
                setToLocationName(
                  options.filter((option) => option.value === value)[0].text
                );
              }}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              className="form-input"
              label="Drop-off date"
              type="date"
              defaultValue={moment().format("YYYY-MM-DD")}
              onChange={(e) => setRetDate(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              className="form-input"
              label="Drop-off time"
              type="time"
              defaultValue={moment().format("HH:MM")}
              onChange={(e) => setRetTime(e.target.value)}
            />
          </Form.Field>
        </Form.Group>
        <div className="form-button">
          <span className="error">
            {visibilityLocation ? (
              <Label pointing prompt color="red">
                Please choose location
              </Label>
            ) : (
              ""
            )}
            {visibilityDate ? (
              <Label pointing prompt color="red">
                Please enter valid date
              </Label>
            ) : (
              ""
            )}
          </span>
          <Button
            type="submit"
            className="submit-btn"
            size="large"
            onClick={(e) =>
              handleClick(fromDate, retDate, fromLocationName, toLocationName)
            }
          >
            <Icon name="search" />
            Search
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SearchCars;
