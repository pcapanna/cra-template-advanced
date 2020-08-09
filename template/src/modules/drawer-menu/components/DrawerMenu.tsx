import React from 'react';
import {DRAWER_WIDTH} from "../constants";
import {useCloseDrawer, useIsDrawerOpen, useToggleDrawer} from "../hooks";
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";
import {PersistentDrawerMenu} from '../../ui';
import DrawerMenuContent from "./DrawerMenuContent";
import {useTheme} from "@material-ui/core";

const DrawerMenu = ({children}) => {

  const {t} = useTranslation();
  const history = useHistory();
  const theme = useTheme();

  function handleGoTo(where) {
    history.push(where);
  }

  const open = useIsDrawerOpen();
  const handleDrawerClose = useCloseDrawer();
  const handleToggleDrawer = useToggleDrawer();

  let drawerWidth = DRAWER_WIDTH;

  return (
    <PersistentDrawerMenu open={open} handleClose={handleDrawerClose} handleToggle={handleToggleDrawer}
                          width={DRAWER_WIDTH}
                          drawerContent={<DrawerMenuContent/>}>
      {children}
    </PersistentDrawerMenu>
  );
};

export default DrawerMenu;
