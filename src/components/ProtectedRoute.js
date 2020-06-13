import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../services/firebase/Auth";
import Login from "../views/Login";

const ProtectedRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Login/>
        )
      }
    />
  );
};


export default ProtectedRoute