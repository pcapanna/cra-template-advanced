import React from 'react';
import {PublicAppBar} from '../../login';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
// import BackgroundImage from "../resources/background_w.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      overflow: 'auto',
      // color:'white',
      // background: `url(${BackgroundImage})`,
      background: '#f2f2f2  ',
      [theme.breakpoints.down('md')]: {
        backgroundPositionX: -100,
      },
    }
  }),
);

const PublicContainer = ({children}) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PublicAppBar/>
      {children}
    </div>
  );
};

export default PublicContainer;
