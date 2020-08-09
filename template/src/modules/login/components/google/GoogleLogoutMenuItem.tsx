import React from 'react';
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import {MenuItem} from "@material-ui/core";
import {GoogleLogin, GoogleLogout} from 'react-google-login';


i18next.addResources('en', 'GoogleLogout', {
  'Logout': 'Logout'
});
i18next.addResources('es', 'GoogleLogout', {
  'Logout': 'Cerrar sesión'
});

const GoogleLogoutMenuItem = (
  {
    onLogout = () => 0, render
  }: {
    onLogout, render?
  }) => {

    const {t} = useTranslation();

    const handleLogout = (event, onClick) => {
      onClick(event);
      onLogout();
    };

    render = render ? render : renderProps => (
      <MenuItem disabled={renderProps.disabled} onClick={(event) => handleLogout(event, renderProps.onClick)}>
        {t('Logout')}
      </MenuItem>
    );

    return (
      <GoogleLogout
        clientId="550680093505-99jvso0njjmhsu9n9bc3fiaqd9aseslf"
        render={render}
        // onLogoutSuccess={onLogoutSuccess}
        // onFailure={onLogoutFailure}
      />
    );
  }
;

export default GoogleLogoutMenuItem;
