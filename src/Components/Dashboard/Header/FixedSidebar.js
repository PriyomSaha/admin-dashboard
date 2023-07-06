import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdSpaceDashboard } from "react-icons/md";
import { BiSolidPackage } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";
import { MdArrowDropDown } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";
import { BiSolidStarHalf, BiSolidShoppingBags } from "react-icons/bi";
import { BsPeopleFill, BsGraphUpArrow } from "react-icons/bs";
import { navigations } from "../Provider/NavigationsProvider";

function FixedSidebar(props) {
  //To display sub menus of Analytics
  let [displayAnalyticsStyle, setDisplayAnalyticsStyle] = useState({
    display: "none",
  });
  //function to toggle sub menus of Analytics visibility
  let setDisplayAnalytics = () => {
    if (displayAnalyticsStyle.display === "block")
      setDisplayAnalyticsStyle({ display: "none" });
    else setDisplayAnalyticsStyle({ display: "block" });
  };

  let [prevComponent, setPrevComponent] = useState(navigations[1]);

  //func to add curr. active class and remove prev. active class
  let setNavigation = (value) => {
    document.getElementById(value).classList.add("active");
    props.setComponent(value);
    if (prevComponent !== value) {
      document.getElementById(prevComponent).classList.remove("active");
      setPrevComponent(value);
    }
  };

  //useeffect to add active class to dashboard
  useEffect(() => {
    document.getElementById(prevComponent).classList.add("active");
  });
  return (
    <>
      <Container fluid className="remove-default-margin-padding position-start">
        <Row>
          <Col className="min-vh-100 w-auto bg-dark col-auto text-white text-nowrap">
            <div className={props.show ? "pt-3 expand" : "pt-3 contract"}>
              <ul className="bd-links-nav list-unstyled my-5 mb-0 pb-3 pb-md-2 pe-lg-2">
                <li
                  onClick={() => setNavigation(navigations[1])}
                  className="bd-links-group my-1 p-2 dashboard-side-components"
                  role="button"
                  id={navigations[1]}
                >
                  <MdSpaceDashboard size="1.5rem" />
                  <span className={props.show ? "px-4" : " d-none"}>
                    {navigations[1]}
                  </span>
                </li>
                <li
                  className="bd-links-group my-1 p-2 dashboard-side-components"
                  role="button"
                  id=""
                  onClick={setDisplayAnalytics}
                >
                  <TbReportAnalytics size="1.5rem" />
                  <span className={props.show ? "px-4" : " d-none"}>
                    {navigations[2]}
                    <MdArrowDropDown size="1.5rem" />
                  </span>
                </li>
                <div style={{ position: "relative", ...displayAnalyticsStyle }}>
                  <ul className="ms-3 bd-links-nav list-unstyled">
                    <li
                      className="bd-links-group p-2 dashboard-side-components"
                      onClick={() => setNavigation(navigations[2.1])}
                      id={navigations[2.1]}
                      role="button"
                    >
                      <TbReport size="1.5rem" />
                      <span className={props.show ? "ps-2" : " d-none"}>
                        {" "}
                        {navigations[2.1]}
                      </span>
                    </li>
                    <li
                      className="bd-links-group p-2 dashboard-side-components"
                      onClick={() => setNavigation(navigations[2.2])}
                      id={navigations[2.2]}
                      role="button"
                    >
                      <VscGraphLine size="1.5rem" />
                      <span className={props.show ? "ps-2" : " d-none"}>
                        {" "}
                        {navigations[2.2]}
                      </span>
                    </li>
                    <li
                      className="bd-links-group p-2 dashboard-side-components"
                      onClick={() => setNavigation(navigations[2.3])}
                      id={navigations[2.3]}
                      role="button"
                    >
                      <BiSolidStarHalf size="1.5rem" />
                      <span className={props.show ? "ps-2" : " d-none"}>
                        {navigations[2.3]}
                      </span>
                    </li>
                  </ul>
                </div>
                <li
                  className="bd-links-group my-1 p-2 dashboard-side-components"
                  role="button"
                  onClick={() => setNavigation(navigations[3])}
                  id={navigations[3]}
                >
                  <BiSolidPackage size="1.5rem" />
                  <span className={props.show ? "px-4" : " d-none"}>
                    {navigations[3]}
                  </span>
                </li>
                <li
                  className="bd-links-group my-1 p-2 dashboard-side-components"
                  role="button"
                  onClick={() => setNavigation(navigations[4])}
                  id={navigations[4]}
                >
                  <BiSolidShoppingBags size="1.5rem" />
                  <span className={props.show ? "px-4" : " d-none"}>
                    {navigations[4]}
                  </span>
                </li>
                <li
                  className="bd-links-group my-1 p-2 dashboard-side-components"
                  role="button"
                  onClick={() => setNavigation(navigations[5])}
                  id={navigations[5]}
                >
                  <BsPeopleFill size="1.5rem" />
                  <span className={props.show ? "px-4" : " d-none"}>
                    {navigations[5]}
                  </span>
                </li>
                <li
                  className="bd-links-group my-1 p-2 dashboard-side-components"
                  role="button"
                  onClick={() => setNavigation(navigations[6])}
                  id={navigations[6]}
                >
                  <BsGraphUpArrow size="1.5rem" />
                  <span className={props.show ? "px-4" : " d-none"}>
                    {navigations[6]}
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
