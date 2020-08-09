import React from 'react';
import {Route} from "react-router-dom";
import {Redirect} from 'react-router';
import {useIsLogged} from "../../index";

const PrivateRoute = (props) => {

  const authenticated = useIsLogged();

  if (!authenticated) {
    return <Redirect to="/login"/>;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
