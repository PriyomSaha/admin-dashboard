import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Row className="home-component-header">
        <span className="fw-bold text-capitalize fs-2 shadow py-2 px-3 mb-4 bg-body-tertiary rounded">
          Dashboard
        </span>
      </Row>
      <Row className="overflow-auto p-2 scrollable">
        <Container fluid>
          <Row className="d-flex justify-content-center g-3">
            <Col lg={3} className="bg-danger me-lg-3 p-3 rounded">
              sss
            </Col>
            <Col lg={3} className="bg-primary me-lg-3 p-3 rounded">
              sss
            </Col>
            <Col lg={3} className="bg-warning me-lg-3 p-3 rounded">
              sss
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}

export default Dashboard;
