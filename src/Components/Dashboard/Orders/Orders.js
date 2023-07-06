import { React, useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  Row,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import { orderNavigations, orderStatus } from "../Provider/NavigationsProvider";
function Orders() {
  let count = 0;

  let [prevComponent, setPrevComponent] = useState(orderNavigations[0]);

  // func to add curr. active class and remove prev. active class
  let setNavigation = (value) => {
    document.getElementById(value).classList.add("order-nav-active");
    if (prevComponent !== value) {
      document
        .getElementById(prevComponent)
        .classList.remove("order-nav-active");
      setPrevComponent(value);
    }
  };

  //useeffect to add active class to All orders
  useEffect(() => {
    document.getElementById(prevComponent).classList.add("order-nav-active");
  });

  //Set Order Status and it's Background
  let [prevClass, setPrevClass] = useState(orderNavigations[0]);

  let setOrderStatus = (e) => {
    let value = e.target.value;
    document
      .getElementById("order-status")
      .classList.replace(prevClass, `order-status-${value}`);
    setPrevClass(`order-status-${value}`);
  };

  return (
    <>
      <Row className="home-component-header">
        <span className="fw-bold text-capitalize fs-2 shadow py-2 px-3 mb-4 bg-body-tertiary rounded">
          Orders
        </span>
      </Row>
      <Row className="overflow-auto scrollable">
        <Col md={4} className="remove-default-margin-padding">
          <Tabs defaultActiveKey="All" className="mb-3" variant="pills">
            <Tab eventKey="All" title="All orders" />
            <Tab eventKey="Scheduled" title="Scheduled" />
          </Tabs>
        </Col>
        <Col md={4} className="mb-3">
          <Form.Control
            aria-label="search"
            placeholder="Search Order"
            className="w-100"
          />
        </Col>
        <Col md={4} className="mb-3">
          <div className="d-flex  align-items-center float-end">
            Per Page &nbsp;
            <Form.Select className="w-auto">
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
            </Form.Select>
          </div>
        </Col>
      </Row>
      <Row className="">
        <Container fluid>
          <div className="overflow-auto p-2 mt-1 d-flex text-nowrap border border-secondary rounded-top border-bottom-0">
            {orderNavigations.map((nav) => (
              <div
                className="w-auto px-4 text-muted fw-medium d-flex pb-2 mt-2"
                id={nav}
                key={nav}
                onClick={() => setNavigation(nav)}
                role="button"
              >
                {nav} ({count++})
              </div>
            ))}
          </div>
          <div className="border border-secondary rounded-bottom border-top-0">
            <Table striped bordered hover responsive variant="light">
              <thead>
                <tr>
                  <th>Order id</th>
                  <th>Date & Time</th>
                  <th>Merchant</th>
                  <th>Customer</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Type</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1154</td>
                  <td>Mon 3 Jul 7:51 PM</td>
                  <td>Dharthi Groceries & Super Mart</td>
                  <td>Neeraj Kaley</td>
                  <td>1</td>
                  <td>₹7,112.32</td>
                  <td>Delivery</td>
                  <td>cod</td>
                  <td>
                    <Form.Select
                      className="w-auto"
                      id="order-status"
                      onChange={(e) => setOrderStatus(e)}
                    >
                      {orderStatus.map((value) => (
                        <option
                          value={value}
                          key={value}
                          style={{ backgroundColor: "white", color: "black" }}
                        >
                          {value}
                        </option>
                      ))}
                    </Form.Select>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry </td>
                  <td> Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Container>
      </Row>
    </>
  );
}

export default Orders;
