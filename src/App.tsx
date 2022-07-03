import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TopBar from "../pages/TopBar";
import Footer from "../pages/Footer";
import { Home } from "../pages/home";
import { CartPage } from "../pages/cart";
import AboutUs from "../pages/aboutUs";
import Register from "../pages/register";
import Login from "../pages/login";

export const App = () => {
  const [cartCountItem, setCartCountItem] = useState(0);
  const cartCount = (count) => {
    setCartCountItem(count);
  };
  return (
    <Router>
      <TopBar cartCount={cartCountItem} />
      <div style={{ paddingBottom: 55 }} />

      <div>
        <Routes>
          <Route
            path="/cart"
            element={<CartPage cartCount={cartCount} />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home cartCount={cartCount} />}></Route>
        </Routes>
      </div>
      <AboutUs />
      <Footer />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
