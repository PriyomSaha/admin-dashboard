import React from "react";
import { Container, Row, Table } from "react-bootstrap";

function Orders() {
  return (
    <>
      <Row className="home-component-header">
        <span className="fw-bold text-capitalize fs-2 shadow py-2 px-3 mb-4 bg-body-tertiary rounded">
          Orders
        </span>
      </Row>
      <Row className="overflow-auto p-2 scrollable">
        <Container fluid>
            <Table
              striped
              bordered
              hover
              responsive
              className="scrollable"
              variant="light"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
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
        </Container>
      </Row>
    </>
  );
}

export default Orders;