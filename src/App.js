import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./Components/Auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Home from "./Components/Dashboard/Home";
import "./App.css";
import Orders from "./Components/Dashboard/Orders/Orders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;
