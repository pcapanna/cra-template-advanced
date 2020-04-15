import React from "react";
import {Spinner} from "../../ui";
import history from "../../../configuration/history";
import {Router, Switch} from "react-router-dom";
import {Redirect} from 'react-router';
import BasicScreen from "../screens/BasicScreen";
import {useIsBootstrapped} from "../hooks";
import {createStyles} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PublicRoute from "./PublicRoute";


const useStyles = makeStyles(() => createStyles({
  background: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  actionButtons: {
    display: "flex",
    flexGrow: 1,
    justifyContent: 'center',
  }
}));

const AppRouter = () => {

  const bootstrapped = useIsBootstrapped();
  const classes = useStyles();

  if (!bootstrapped) {
    return (
      <div className={classes.background}>
        <Spinner/>
      </div>
    );
  }
  return (
    <Router history={history}>
      <Switch>
        {/*<UnLoggedRoute path="/login" exact component={LoginScreen} />*/}
        <PublicRoute path="/" exact component={BasicScreen}/>
        <Redirect from="*" to="/"/>
      </Switch>
    </Router>
  );
};

export default AppRouter;
