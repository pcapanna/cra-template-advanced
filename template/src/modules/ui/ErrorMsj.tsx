import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const errorColor = '#f1956f';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    msj: {
      color: errorColor,
      fontSize: "13px",
      padding: 10,
      display: "block"
    }
  })
);

const ErrorMsj = ({children}) => {

  const classes = useStyles();
  return <span className={classes.msj}>{children}</span>;
};
export default ErrorMsj;
