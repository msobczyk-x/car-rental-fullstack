import React from "react";
import "./ManageRentals.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Table, Header, Button, Portal, Segment } from "semantic-ui-react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ManageRentals = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("user");

  const [rentals, setRentals] = useState([]);
  const [cars, setCars] = useState([]);
  const [locations, setLocations] = useState([]);
  const [payments, setPayments] = useState([]);
  const [portal, setPortal] = useState(false);

  const handleOpen = () => {
    setPortal(true);
  };

  const handleClose = () => {
    setPortal(false);
  };

  const handleCancelBooking = (rentalId) => {
    axios
      .delete(`http://localhost:8000/bookings/${rentalId}/`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getPayments = (rentalId) => {
    axios
      .get(`http://localhost:8000/payments/?bookingId=${rentalId}`)
      .then((res) => {
        setPayments(res.data);

      });
  };

  const makePayment = (rentalId, rentalPrice) => {
    localStorage.setItem("rentalId", rentalId);
    localStorage.setItem("rentalPrice", rentalPrice);
    navigate("/payment");
  };

  const calculateTotal = (startDate) => {
    const start = moment(startDate);
    const end = moment("2020-01-01");
    const duration = moment.duration(end.diff(start));
    const days = duration.asDays();
    return days;
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/locations/`).then((res) => {
      setLocations(res.data);
    });

    axios.get(`http://localhost:8000/cars/`).then((res) => {
      setCars(res.data);
    });
    axios
      .get(`http://localhost:8000/customers/?username=${username}`)
      .then((res) => {
        axios
          .get(`http://localhost:8000/bookings/?userId=${res.data[0].id}`)
          .then((respo) => {
            setRentals(respo.data);
          });
      });
    //eslint-disable-next-line
  }, []);

  return (
    <div className="ManageRentals">
      <div className="main-container">
        <Header as="h1">Manage Rentals</Header>
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>No</Table.HeaderCell>
              <Table.HeaderCell>Car</Table.HeaderCell>
              <Table.HeaderCell>Pick-up location</Table.HeaderCell>
              <Table.HeaderCell>Pick-up date</Table.HeaderCell>
              <Table.HeaderCell>Pick-up time</Table.HeaderCell>
              <Table.HeaderCell>Drop-off location</Table.HeaderCell>
              <Table.HeaderCell>Drop-off date</Table.HeaderCell>
              <Table.HeaderCell>Drop-off time</Table.HeaderCell>
              <Table.HeaderCell>Total Amount</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {rentals.map((rental) => (
              <Table.Row>
                <Table.Cell>{rental.id}</Table.Cell>
                <Table.Cell>
                  {cars.map((car) =>
                    car.id === rental.car
                      ? car.brand_name + " " + car.model_name
                      : null
                  )}
                </Table.Cell>
                <Table.Cell>
                  {locations.map((location) =>
                    location.id === rental.pickup_location
                      ? location.location_name
                      : null
                  )}
                </Table.Cell>
                <Table.Cell>{rental.from_date}</Table.Cell>
                <Table.Cell>{rental.from_time}</Table.Cell>
                <Table.Cell>
                  {locations.map((location) =>
                    location.id === rental.drop_location
                      ? location.location_name
                      : null
                  )}
                </Table.Cell>
                <Table.Cell>{rental.ret_date}</Table.Cell>
                <Table.Cell>{rental.ret_time}</Table.Cell>
                <Table.Cell>{rental.amount} $</Table.Cell>
                <Table.Cell>
                  {calculateTotal(rental.from_date) > 0 ? (
                    <Button
                      color="red"
                      onClick={(e) => {
                        handleCancelBooking(rental.id);
                      }}
                    >
                      Cancel booking
                    </Button>
                  ) : rental.payment_status === false ? (
                    <Button
                      color="blue"
                      onClick={(e) => {
                        makePayment(rental.id, rental.amount);
                      }}
                    >
                      Pay
                    </Button>
                  ) : (
                    <Button
                      color="grey"
                      onClick={(e) => {
                        getPayments(rental.id);
                        handleOpen();
                      }}
                      disabled={portal}
                    >
                      Payment details
                    </Button>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}

            <Portal onClose={handleClose} open={portal}>
              <Segment
                style={{
                  "min-width": "300px",
                  left: "55%",
                  position: "fixed",
                  top: "20%",
                  zIndex: 1000,
                }}
              >
                <Header>Payment details</Header>
                <Table celled padded>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>No</Table.HeaderCell>
                      <Table.HeaderCell>Payment date</Table.HeaderCell>
                      <Table.HeaderCell>Payment time</Table.HeaderCell>
                      <Table.HeaderCell>Discount amount</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {payments.map((payment) => (
                    <Table.Row>
                      <Table.Cell>{payment.booking}</Table.Cell>
                      <Table.Cell>{payment.payment_date}</Table.Cell>
                      <Table.Cell>{payment.payment_time}</Table.Cell>
                      <Table.Cell>{payment.discount_amount}</Table.Cell>
                    </Table.Row>
                    ))}
                  </Table.Body>
                </Table>

                <Button content="Close" negative onClick={handleClose} />
              </Segment>
            </Portal>
          </Table.Body>
        </Table>
        <h5>
          Note: You will be able to pay at the first day of the rental day
        </h5>
      </div>
    </div>
  );
};
export default ManageRentals;
