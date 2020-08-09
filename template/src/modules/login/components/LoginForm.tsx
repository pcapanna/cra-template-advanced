import React, {useState} from 'react';
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import {Checkbox, createStyles, Divider, FormControlLabel, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import useLoginError from "../hooks/useLoginError";
import {useLoginFailure, useLoginSuccess} from "../hooks";
import GoogleLoginButton from "./google/GoogleLoginButton";
import {User} from "../../../model";
import ErrorMsj from "../../ui/ErrorMsj";


i18next.addResources('es', 'LoginOptions', {
    wrongCredentials: 'Error encountered'
  }
);
i18next.addResources('en', 'LoginOptions', {
    wrongCredentials: 'Ha ocurrido un error'
  }
);


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    FormContainer: {
      textAlign: 'center',
      padding: 20
    },
    TextInput: {
      marginTop: 14,
      width: '100%'
    },
    SubmitBtnContainer: {
      padding: 15
    },
    SubmitBtn: {},
    errorContainer: {
      marginTop: 5
    }
  }),
);


const LoginForm = () => {

  const {t} = useTranslation();
  const classes = useStyles();

  const onLoginFailure = useLoginFailure();
  const onLoginSuccess = useLoginSuccess();
  const loginError = useLoginError();

  const [imAdmin, setImAdmin] = useState<boolean>(false);

  return (
    <div className={classes.FormContainer}>
      <div className={classes.errorContainer}>
        {loginError && (
          <ErrorMsj>
            {t("LoginOptions.wrongCredentials")}
          </ErrorMsj>
        )}
      </div>
      <div className={classes.SubmitBtnContainer}>
        <GoogleLoginButton onLoginSuccess={(user: User) => onLoginSuccess({...user, admin: imAdmin})}
                           onLoginFailure={onLoginFailure}/>
      </div>
    </div>
  );
};

export default LoginForm;
