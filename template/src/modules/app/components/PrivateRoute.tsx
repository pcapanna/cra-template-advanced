import React from 'react';
import {Route} from "react-router-dom";
import {useIsBootstrapped} from "../hooks";

const PrivateRoute = (props) => {

  const bootstrapped = useIsBootstrapped();

  // TODO: you need to implement useIsLogged hook on some authentication component
  // const authenticated = useIsLogged();

  if (!bootstrapped) {
    return null;
  }

  // TODO: You need to define Login Route to redirect if no authenticated
  // if (!authenticated) {
  //     return <Redirect to="/login"/>;
  // }

  return <Route {...props} />;
};
