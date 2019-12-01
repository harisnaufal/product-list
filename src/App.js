import React from "react";
import Store from "./store/Store";
import { fetchProducts } from "./middleware/Api";
import Category from "./components/category/Category";
import ProductCard from "./components/product-card/ProductCard";
import BottomNavigation from "./components/navigation/BottomNavigation";
import "./App.css";

function App() {
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
    <Store.Provider value={state}>
      <div className="mobile-web--container">
        <Category />
        <ProductCard />
        <BottomNavigation />
      </div>
    </Store.Provider>
  );
}

export default App;
