import React from 'react';
import {PublicContainer} from '../../layout';
import Grid from '@material-ui/core/Grid';
import {LoginBox, LoginHeader} from '../components';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import LoginForm from "../components/LoginForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appVersion: {
      fontSize: 'small',
      color: 'grey',
      fontStyle: 'normal',
      maxWidth: '500px',
      width: '100%',
      textAlign: 'right',
      paddingTop: 10
    },
    boxContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    buildDate: {
      marginLeft: '5px',
      color: '#b6b7b7'
    }
  }),
);

const buildData = {version: '1.0.0', buildDate: 'fecha random'};
const LoginScreen = () => {

  const classes = useStyles();

  return (
    <PublicContainer>
      <Grid container justify="center">
        <Grid item xs={12}>
          <div className={classes.boxContainer}>
            <LoginBox headerContent={<LoginHeader/>} bodyContent={<LoginForm/>}/>
          </div>
        </Grid>
      </Grid>
    </PublicContainer>
  );
};

export default LoginScreen;


