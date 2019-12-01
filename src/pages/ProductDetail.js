import React from "react";
import Header from "../components/header/Header";

const ProductDetail = props => {
  const {
    location: { state }
  } = props;
  const navigateBack = () => {
    props.history.goBack();
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      {/* <Header isBack navigateBack={navigateBack} /> */}
      <div className="back-button">
        <i
          class="fa fa-angle-left fa-2x"
          aria-hidden="true"
          onClick={navigateBack}
        ></i>
      </div>
      <div className="product-detail">
        <img src={state.item.imageUrl} alt={state.item.title} width="100%" />
        <div className="product-detail--title">
          <h2>Product Detail {state.item.title}</h2>
          <div className="product-detail--title-favourite">
            <i class="fa fa-heart-o fa-2x"></i>
          </div>
        </div>
        <p>{state.item.description}</p>
        <div className="product-detail--action">
          <h5>{state.item.price}</h5>
          <button type="button">Buy</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetail;
