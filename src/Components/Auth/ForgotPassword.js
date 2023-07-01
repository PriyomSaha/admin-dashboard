import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center w-100 vh-100 bg-secondary">
        <Form className="bg-white py-4 px-4 w-40 rounded shadow-sm">
          <h2 className="border-bottom border-2 pb-3 d-flex justify-content-center">
            Forgot Password
          </h2>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label className="mb-3 text-muted">
              <b> Enter your email to recover the account</b>
            </Form.Label>
            <Form.Control type="email" placeholder="username@address.com" />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Send Reset Link
          </Button>
          <div>
            <Link to="/">
              <span className="float-end mt-4 text-primary link-underline link-underline-opacity-0">
                <i class="bi bi-arrow-left " /> &nbsp;Go Back To Sign In
              </span>
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
}

export default ForgotPassword;
