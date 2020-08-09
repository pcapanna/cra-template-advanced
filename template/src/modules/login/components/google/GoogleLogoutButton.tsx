import React from 'react';
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import {Button} from "@material-ui/core";
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import googleLogoSvg from "../../resources/logo_google.svg";
import {GOOGLE_CLIENT_ID} from "../../constants";


i18next.addResources('en', 'GoogleLogout', {
  'Sign out form Google': 'Sign in With Google'
});
i18next.addResources('es', 'GoogleLogout', {
  'Sign out from Google': 'Accede con Google'
});

const GoogleLogoutButton = (
  {
    onLogoutSuccess = () => 0, onLogoutFailure = (error) => 0, render
  }: {
    onLogoutSuccess?, onLogoutFailure?, render?
  }) => {

    const {t} = useTranslation();

    render = render ? render : renderProps => (
      <Button variant="contained" color="secondary" disabled={renderProps.disabled}
              onClick={renderProps.onClick} style={{display: 'flex', width: '100%'}}>
        <img src={googleLogoSvg} alt="test"/>
        <span style={{flexGrow: 1}}>
            {t('Sign in With Google')}
              </span>
      </Button>
    );

    return (
      <GoogleLogout
        clientId={GOOGLE_CLIENT_ID}
        render={render}
        onLogoutSuccess={onLogoutSuccess}
        onFailure={onLogoutFailure}
      />
    );
  }
;

export default GoogleLogoutButton;
