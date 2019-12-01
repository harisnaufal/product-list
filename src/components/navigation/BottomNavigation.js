import React from "react";

const BottomNavigation = () => {
  const [menus] = React.useState(["home", "Feed", "Cart", "Profile"]);
  return (
    <div className="bottom-navigation">
      {menus.map((menu, index) => (
        <div className="bottom-navigation--menu" key={index}>
          <p>{menu}</p>
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;
