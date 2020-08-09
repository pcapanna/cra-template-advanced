import React, {ReactNode} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Card, CardContent, Typography, Divider} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      maxWidth: '500px',
      margin: '60px auto auto',
      textAlign: 'left',
    },
    childrenContainer: {
      borderTop: '1px solid #627AAD'
    },
    ImgContainer: {
      flex: 1,
    },
    Img: {
      height: 35,
      margin: 10
    },
    HeaderContainer: {
      display: 'flex',
    },
    HeaderActionContainer: {
      flex: 0,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      paddingRight: 10
    }
  }),
);

const LoginBox = (
  {
    headerContent, bodyContent,
  }: {
    headerContent, bodyContent
  }) => {

  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        {headerContent}
      </CardContent>
      <Divider/>
      <CardContent className={classes.childrenContainer}>
        {bodyContent}
      </CardContent>
    </Card>
  );
};

export default LoginBox;
