import React, { useState, useEffect } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { MdSpaceDashboard } from "react-icons/md";
import { BiSolidPackage } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";
import { MdArrowDropDown } from "react-icons/md";
import { TbReport } from "react-icons/tb";

function FixedSidebar(props) {
  let [displayAnalyticsStyle, setDisplayAnalyticsStyle] = useState({
    display: "none",
  });

  let setDisplayAnalytics = () => {
    if (displayAnalyticsStyle.display === "block")
      setDisplayAnalyticsStyle({ display: "none" });
    else setDisplayAnalyticsStyle({ display: "block" });
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="min-vh-100 w-auto bg-dark col-auto text-white text-nowrap">
            <div className={props.show ? "pt-3 expand" : "pt-3 contract"}>
              <ul className="bd-links-nav list-unstyled my-5 mb-0 pb-3 pb-md-2 pe-lg-2">
                <li
                  className="bd-links-group my-1 p-2"
                  role="button"
                  id="dashboard-side-components"
                >
                  <MdSpaceDashboard size="1.5rem" />
                  <span className={props.show ? "px-4" : " d-none"}>
                    Dashboard
                  </span>
                </li>

                <li
                  className="bd-links-group my-1 p-2"
                  role="button"
                  id="dashboard-side-components"
                  onClick={setDisplayAnalytics}
                >
                  <TbReportAnalytics size="1.5rem" />
                  <span className={props.show ? "px-4" : " d-none"}>
                    Analytics
                    <MdArrowDropDown size="1.5rem" />
                  </span>
                </li>
                <div style={{position:"fixed", ...displayAnalyticsStyle }}>
                  <ul className="ms-4 bd-links-nav list-unstyled">
                    <li
                      className="bd-links-group py-1"
                      id="dashboard-side-components"
                    >
                      <TbReport size="1.5rem" />
                      <span className="ps-2"> Something</span>
                    </li>
                    <li className="bd-links-group py-1">
                      <TbReport size="1.5rem" />
                      <span className="ps-2"> Something</span>
                    </li>
                    <li className="bd-links-group py-1">
                      <TbReport size="1.5rem" />
                      <span className="ps-2"> Something</span>
                    </li>
                  </ul>
                </div>
                <li
                  className="bd-links-group my-1 p-2"
                  role="button"
                  id="dashboard-side-components"
                >
                  <BiSolidPackage size="1.5rem" />
                  <span className={props.show ? "px-4" : " d-none"}>
                    Orders
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FixedSidebar;

{
  /* <li
className="bd-links-group my-1 p-2"
id="dashboard-side-components"
>
<Dropdown>
  <BiSolidPackage size="1.5rem" />
  <span className={props.show ? "px-4" : " d-none"}>
    <Dropdown.Toggle
      variant="dark"
      className="p-2"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Orders
    </Dropdown.Toggle>
  </span>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">
      Another action
    </Dropdown.Item>
    <Dropdown.Item href="#/action-3">
      Something else
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</li> */
}
