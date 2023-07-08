import { Col, Dropdown, Nav, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import FixedSidebar from "./FixedSidebar";
import { PiUserCircleGearDuotone } from "react-icons/pi";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import EditProfile from "./EditProfile";

function Header(props) {
  const [show, setShow] = useState(true);
  let height = window.innerWidth;
  useEffect(() => {
    if (height <= 768) {
      setShow(false);
    }
  }, [height]);

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <FixedSidebar
        setComponent={props.setComponent}
        show={show}
        setShow={setShow}
      />
      <Navbar
        className="shadow mb-3 fixed-top flex-nowrap"
        bg="dark"
        variant="dark"
      >
        <Container fluid className="text-white align-items-center ">
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
          <Nav className="ms-auto align-items-center" role="button">
            <div
              className={
                show
                  ? "btn-group dropdown text-white"
                  : "btn-group dropstart text-white"
              }
            >
              <button
                type="button"
                className="bg-transparent border-0 d-flex align-items-center dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "whitesmoke" }}
              >
                <PiUserCircleGearDuotone size={"1.5rem"} />
                <span className="text-nowrap ms-2 d-none d-md-block">
                  &nbsp; Priyom Saha
                </span>
              </button>
              <ul className="dropdown-menu" data-bs-theme="dark">
                <Container fluid className="w-auto">
                  <Row onClick={() => setModalShow(true)}>
                    <Dropdown.Item className="d-flex align-items-center ">
                      <Col>Edit Profile</Col>
                      <Col className="d-flex justify-content-end">
                        <FaUserCircle />
                      </Col>
                    </Dropdown.Item>
                  </Row>
                  <EditProfile
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                  <Dropdown.Divider />
                  <Row>
                    <Dropdown.Item className="d-flex align-items-center">
                      <Col>Log Out</Col>
                      <Col className="d-flex justify-content-end">
                        <TbLogout />
                      </Col>
                    </Dropdown.Item>
                  </Row>
                </Container>
              </ul>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;

