import React from "react";
import Header from "./Header/Header";
import Body from "./Body";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { navigations } from "./Provider/NavigationsProvider";

export default function Home() {
  let [component, setComponent] = useState(navigations[1]);
  return (
    <Container fluid className="remove-default-margin-padding min-vh-100">
      <Row className="d-flex justify-content-start ">
        <Col className="col-auto">
          <Header setComponent={setComponent} />
        </Col>
        <Col className="overflow-auto text-nowrap mt-5 remove-default-margin-padding">
          <Container fluid className="mt-2 wh-100">
            <Body component={component} />
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
