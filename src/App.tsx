import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TopBar from "../pages/TopBar";
import { Home } from "../pages/home";
import { CartPage } from "../pages/cart";
import AboutUs from "../pages/aboutUs";

export const App = () => {
  const [cartCountItem, setCartCountItem] = useState(0);
  const cartCount = (count) => {
    setCartCountItem(count);
  };
  return (
    <Router>
      <TopBar cartCount={cartCountItem} />
      <div style={{ paddingBottom: 50 }} />

      <div>
        <Routes>
          <Route
            path="/cart"
            element={<CartPage cartCount={cartCount} />}
          ></Route>
          <Route path="/" element={<Home cartCount={cartCount} />}></Route>
        </Routes>
      </div>
      <AboutUs />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
