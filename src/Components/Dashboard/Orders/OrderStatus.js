import { React, useEffect, useState } from "react";
import { orderStatus } from "../Provider/NavigationsProvider";
import { Form } from "react-bootstrap";

export default function OrderStatus(props) {
  //Set Order Status and it's Background
  let [prevClass, setPrevClass] = useState();

  let [status, setStatus] = useState(props.status);

  let setOrderStatus = (e) => {
    let value = e.target.value;
    setStatus(value);
    document
      .getElementById(`order-status-${props.id}`)
      .classList.remove(prevClass);
    document
      .getElementById(`order-status-${props.id}`)
      .classList.add(`order-status-${value}`);

    setPrevClass(`order-status-${value}`);
  };

  useEffect(() => {
    document
      .getElementById(`order-status-${props.id}`)
      .classList.add(`order-status-${status}`);
  });

  return (
    <Form.Select
      className="w-auto"
      id={`order-status-${props.id}`}
      value={status}
      onChange={(e) => setOrderStatus(e)}
    >
      {orderStatus.map((value, index) => (
        <option
          value={value}
          key={value}
          style={{ backgroundColor: "white", color: "black" }}
          select={(index === 0).toString()}
        >
          {value}
        </option>
      ))}
    </Form.Select>
  );
}
