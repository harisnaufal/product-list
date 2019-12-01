import React from "react";
import { Route } from "react-router-dom";

// Style
import "./App.css";

// Pages
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import PurchaseHistory from "./pages/PurchaseHistory";

const Routes = () => {
  return (
    <div className="mobile-web--container">
      <Route exact path="/" component={Dashboard} />
      <Route path="/product/detail" component={ProductDetail} />
      <Route path="/profile" component={PurchaseHistory} />
    </div>
  );
};

export default Routes;
