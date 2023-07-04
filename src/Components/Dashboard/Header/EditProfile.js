import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { InputGroup } from "react-bootstrap";

function EditProfile(props) {
  let [showPassword, setShowPassword] = useState(false);
  let [passwordType, setPasswordType] = useState("password");

  let togglePassword = () => {
    setShowPassword(!showPassword);
    !showPassword ? setPasswordType("text") : setPasswordType("password");
  };

  let [showConfPassword, setShowConfPassword] = useState(false);
  let [confPasswordType, setConfPasswordType] = useState("password");

  let toggleConfPassword = () => {
    setShowConfPassword(!showPassword);
    !showConfPassword
      ? setConfPasswordType("text")
      : setConfPasswordType("password");
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit your details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>
            <Form>
              <Row>
                <Col sm={6}>
                  <Form.Group className="mb-3" controlId="fName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-3" controlId="lName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <Form.Label>Password</Form.Label>
                  <InputGroup className="mb-3" controlId="pass" aria-disabled>
                    <Form.Control
                      type={passwordType}
                      value="testPass@1" /*Dynamic Value */
                      disabled
                      readOnly
                    />
                    <Button variant="secondary" onClick={togglePassword}>
                      {showPassword ? (
                        <i class="bi bi-eye-fill" />
                      ) : (
                        <i class="bi bi-eye-slash-fill" />
                      )}
                    </Button>
                  </InputGroup>
                </Col>
                <Col sm={6}>
                  <Form.Label>Confirm Password</Form.Label>
                  <InputGroup className="mb-3" controlId="confPass">
                    <Form.Control
                      type={confPasswordType}
                      placeholder="Confirm Password"
                    />
                    <Button variant="secondary" onClick={toggleConfPassword}>
                      {showConfPassword ? (
                        <i class="bi bi-eye-fill" />
                      ) : (
                        <i class="bi bi-eye-slash-fill" />
                      )}
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <Form.Group className="mb-3" controlId="fName">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      value="priyom.saha@test.com" /*Dynamic Value */
                      disabled
                      readOnly
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button className="px-4 py-2">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProfile;
