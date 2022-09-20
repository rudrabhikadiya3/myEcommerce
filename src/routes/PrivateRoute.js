import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const auth = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.data !== null ? 
          <Component {...props} />
         : 
          <Redirect to={"/login"} />
        
      }
    />
  );
}

export default PrivateRoute;
