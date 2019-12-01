import React from "react";
import { Route } from "react-router-dom";

// Style
import "./App.css";

// Pages
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import PurchaseHistory from "./pages/PurchaseHistory";
import SearchProduct from "./pages/SearchProduct";

const Routes = () => {
  return (
    <div className="mobile-web--container">
      <Route exact path="/" component={Dashboard} />
      <Route path="/product/detail" component={ProductDetail} />
      <Route path="/profile" component={PurchaseHistory} />
      <Route path="/product/search" component={SearchProduct} />
    </div>
  );
};

export default Routes;
