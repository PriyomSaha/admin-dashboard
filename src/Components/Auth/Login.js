import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Outlet, Link } from "react-router-dom";

function Login() {
  let [showPassword, setShowPassword] = useState(false);
  let [passwordType, setPasswordType] = useState("password");

  let togglePassword = () => {
    setShowPassword(!showPassword);
    !showPassword ? setPasswordType("text") : setPasswordType("password");
  };
  // useEffect({}, []);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center w-100 vh-100 bg-secondary">
        <Form className="bg-white py-4 px-4 w-40 rounded shadow-sm">
          <h2 className="border-bottom border-2 pb-3 d-flex justify-content-center">
            LogIn as Admin
          </h2>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label className="mb-3 text-muted">
              <b> Enter your details to access the acount</b>
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <InputGroup className="mb-2" controlId="formBasicPassword">
            <Form.Control type={passwordType} placeholder="Password" />
            <Button variant="secondary" onClick={togglePassword}>
              {showPassword ? (
                <i class="bi bi-eye-fill" />
              ) : (
                <i class="bi bi-eye-slash-fill" />
              )}
            </Button>
          </InputGroup>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Link to="/home">
          <Button variant="primary" type="submit" className="w-100 mb-4">
            Signin
          </Button>
          </Link>
          <div>
            Forgot Password ?
            <Link to="/forgotpassword">
              <span class="pe-auto float-end">Click Here!</span>
            </Link>
          </div>
        </Form>
      </div>
      <Outlet />
    </>
  );
}

export default Login;
