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
    <div className="login">
      <h3 className="title">LOGIN</h3>
      <div className="search-bar">
        <input className="field"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="search-bar">
        <input className="field"
          type="text"
          placeholder="Password"
        />
      </div>
      <div className="button-signin">
        <div>
          <input type="checkbox" name="remember" value="remember" /> Remember Me
        </div>
        <button type="button" onClick={handleLogin}>
          Sign In
        </button>
      </div>
      <div className="account">
        <button type="button" className="facebook">
          Sign In With Facebook
        </button>
        <button type="button" className="google">
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
