import React from "react";
import "./Search-cars.scss";
import { Form, Button, Checkbox } from "semantic-ui-react";
import moment from "moment";

const SearchCars = () => {
  const options = [
    { key: "g", text: "Gdańsk-Lotnisko", value: "Gdańsk-Lotnisko" },
    { key: "w", text: "Warszawa-Lotnisko", value: "Warszawa-Lotnisko" },
    { key: "k", text: "Kraków-Lotnisko", value: "Kraków-Lotnisko" },
  ];

  return (
    <div className="SearchCars">
      <Form>
        <Form.Group>
          <Form.Field>
            <Form.Select
              label="Pick-up location"
              options={options}
              placeholder="Location"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="Pick-up date"
              type="date"
              value={moment().format("YYYY-MM-DD")}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="Pick-up time"
              type="time"
              value={moment().format("HH:MM")}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field>
            <Form.Select
              label="Drop-off location"
              options={options}
              placeholder="Location"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="Drop-off date"
              type="date"
              value={moment().format("YYYY-MM-DD")}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="Drop-off time"
              type="time"
              value={moment().format("HH:MM")}
            />
          </Form.Field>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default SearchCars;
