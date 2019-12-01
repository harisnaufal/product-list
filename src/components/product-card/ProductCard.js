import React from "react";
import Store from "../../store/Store";

const ProductCard = () => {
  const [initProducts] = React.useState([0, 1, 2]);
  const store = React.useContext(Store);
  return (
    <div className="product-card--wrapper">
      <div className="product-card--list">
        {store.products.length > 0
          ? store.products.map((product, index) => (
              <div className="product-card--detail">
                <div className="product-card--detail-img">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    width={"100%"}
                  />
                </div>
                <h4>{product.title}</h4>
              </div>
            ))
          : initProducts.map((product, index) => (
              <div className="product-card--detail">
                <div className="product-card--detail-img-skeleton"></div>
                <h4>Loading...</h4>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductCard;
