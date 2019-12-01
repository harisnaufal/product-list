import React from "react";

const Header = ({ isBack, navigateBack }) => {
  return (
    <div className="header">
      {isBack ? (
        <React.Fragment>
          <i class="fa fa-chevron-left" aria-hidden="true" onClick={navigateBack}></i>
          <div className="search-bar">
            <input type="text" placeholder="Search product ..." />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <i class="fa fa-heart-o"></i>
          <div className="search-bar--button">
            <i class="fa fa-search search-icon" aria-hidden="true"></i>
            <button
              type="button"
              onClick={() => {
                console.log("asda");
              }}
            >
              Search Product ...
            </button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Header;
