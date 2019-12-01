import React from "react";
import { Store } from "../store/Store";
import Actions from "../actions/Actions";

const Login = () => {
  const { dispatch } = React.useContext(Store);
  const handleLogin = () => {
    return dispatch({
      type: Actions.LOGIN,
      payload: true
    });
  };
  return (
    <div className="">
      <h1>Not login</h1>
      <button onClick={handleLogin}>Test Login</button>
    </div>
  );
};

export default Login;
