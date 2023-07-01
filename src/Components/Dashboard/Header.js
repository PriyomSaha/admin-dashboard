import { Row, Col, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import FixedSidebar from "./FixedSidebar";
import { PiUserCircleGearDuotone } from "react-icons/pi";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";

function Header() {
  const [show, setShow] = useState(true);
  return (
    <>
      <FixedSidebar show={show} setShow={setShow} />
      <Navbar
        className="shadow mb-3 fixed-top flex-nowrap"
        bg="dark"
        variant="dark"
      >
        <Container fluid className="text-white align-items-center">
          <h3 className="me-5">
            <GiHamburgerMenu onClick={() => setShow(!show)} role="button" />
          </h3>
          <Navbar.Brand className="text-nowrap">Page Logo</Navbar.Brand>
          <div className="w-50 mx-3 d-flex jusify-content-center d-none d-sm-block">
            <InputGroup>
              <InputGroup.Text>
                <BsSearch />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <Nav className="ms-auto align-items-center">
            <Nav.Item>
              <h3>
                <PiUserCircleGearDuotone />
              </h3>
            </Nav.Item>
            <Nav.Item className="text-nowrap ms-2 d-none d-md-block">
              Priyom Saha
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;

//  <Col className="col-auto">
// <h3>
// <GiHamburgerMenu onClick={() => setShow(!show)} role="button" />
// </h3>
// </Col>
// <Col className="col-auto">
// <Navbar.Brand className="me-5">Page Logo</Navbar.Brand>
// </Col>
// <Col className="col-auto">
// <InputGroup>
// <InputGroup.Text>
//   <BsSearch />
// </InputGroup.Text>
// <Form.Control
//   placeholder="Search"
//   aria-label="Search"
//   aria-describedby="basic-addon1"
// />
// </InputGroup>
// </Col>
