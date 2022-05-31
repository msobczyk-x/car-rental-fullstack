import React, {useEffect, useState} from "react";
import "./Search-cars.scss";
import { Form, Button, Icon } from "semantic-ui-react";
import moment from "moment";
import axios from "axios";

const baseURL = "http://localhost:8000/api/locations/";
const SearchCars = () => {
  const [options, setOptions] = useState([]);
/*   const [locations, setLocations] = useState([]); */

  useEffect(() => {
    axios.get(baseURL).then((res) => {
  /*     setLocations(res.data); */
      console.log(res.data);
      setOptions(res.data.map((location) => ({
        key: location.id,
        text: location.location_name,
        value: location.id,
      })));
    });
  }, []);
      
  

  return (
    <div className="SearchCars">
      <h1>Rent a car with us !</h1>
      <Form>
        <Form.Group>
          <Form.Field>
            <Form.Select
            className="form-input"
              label="Pick-up location"
              options={options}
              placeholder="Location"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
            className="form-input"
              label="Pick-up date"
              type="date"
              value={moment().format("YYYY-MM-DD")}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
            className="form-input"
              label="Pick-up time"
              type="time"
              value={moment().format("HH:MM")}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field>
            <Form.Select
            className="form-input"
              label="Drop-off location"
              options={options}
              placeholder="Location"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
            className="form-input"
              label="Drop-off date"
              type="date"
              value={moment().format("YYYY-MM-DD")}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
            className="form-input"
              label="Drop-off time"
              type="time"
              value={moment().format("HH:MM")}
            />
          </Form.Field>
        </Form.Group>
        <Button type="submit" className="submit-btn"><Icon name="search"/>Search</Button>
      </Form>
    </div>
  );
};

export default SearchCars;
