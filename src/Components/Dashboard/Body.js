import React from "react";
import Orders from "./Orders/Orders";
import Dashboard from "./Dashboard/Dashboard";

function Body(props) {
  if (props.component === "Orders") return <Orders />;
  else if (props.component === "Dashboard") return <Dashboard />;
  else return <>else</>;
}

export default Body;
