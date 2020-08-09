import React from 'react';
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import {Button} from "@material-ui/core";
import {GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline} from 'react-google-login';
import googleLogoSvg from "../../resources/logo_google.svg";
import GoogleUserSerializer from "./GoogleUserSerializer";
import {User} from "../../../../model";
import _ from "lodash";

i18next.addResources('en', 'GoogleLogin', {
  'Sign in With Google': 'Sign in With Google'
});
i18next.addResources('es', 'GoogleLogin', {
  'Sign in With Google': 'Accede con Google'
});

const GoogleLoginButton = (
  {
    onLoginSuccess = (user) => 0, onLoginFailure = (error) => 0, render
  }: {
    onLoginSuccess?: (user: User) => any, onLoginFailure?, render?
  }) => {

  const {t} = useTranslation();

  return (
    <GoogleLogin
      clientId="550680093505-99jvso0njjmhsu9n9bc3fiaqd9aseslf"
      render={renderProps => (
        <Button variant="contained" color="default" disabled={renderProps.disabled}
                onClick={renderProps.onClick} style={{display: 'flex', width: '100%'}}>
          <img src={googleLogoSvg} alt="test"/>
          <span style={{flexGrow: 1}}>
            {t('Sign in With Google')}
              </span>
        </Button>
      )}
      onSuccess={(successResponse: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        if (_.has(successResponse, "googleId")) {
          onLoginSuccess(GoogleUserSerializer.deserialize((successResponse as GoogleLoginResponse)))
        } else {
          onLoginFailure();
        }
      }}
      onFailure={onLoginFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={false}
    />
  );
};

export default GoogleLoginButton;
