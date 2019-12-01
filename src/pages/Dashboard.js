import React from "react";
import Category from "../components/category/Category";
import ProductCard from "../components/product-card/ProductCard";
import Header from "../components/header/Header";

const Dashboard = props => {
  const navigateToProductDetail = item => {
    props.history.push("/product/detail", {
      item
    });
  };
  return (
    <div className="dashboard">
      <Header />
      <Category />
      <ProductCard onClick={navigateToProductDetail} />
    </div>
  );
};

export default Dashboard;
