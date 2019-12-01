import React from "react";
import { Route } from "react-router-dom";
import Store from "./store/Store";
import { fetchProducts } from "./middleware/Api";

// Style
import "./App.css";

// Components
import BottomNavigation from "./components/navigation/BottomNavigation";

// Pages
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";

const Routes = () => {
  const [state, setState] = React.useState({
    category: [],
    products: []
  });
  React.useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      const initialState = {
        category: [...products[0].data.category],
        products: [...products[0].data.productPromo]
      };
      setState(initialState);
    };
    getProducts();
  }, []);
  return (
    <div className="mobile-web--container">
      <Store.Provider value={state}>
        <Route exact path="/" component={Dashboard} />
        <Route path="/product/detail" component={ProductDetail}/>
        {/* <BottomNavigation /> */}
      </Store.Provider>
    </div>
  );
};

export default Routes;
