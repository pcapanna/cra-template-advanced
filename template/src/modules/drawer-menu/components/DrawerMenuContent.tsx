import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import GestureIcon from '@material-ui/icons/Gesture';
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";

i18next.addResources('en', 'MenuDrawer', {
  'Home': 'Home',
  'About': 'About',
  'Example': 'Redux Example'
});
i18next.addResources('es', 'MenuDrawer', {
  'Home': 'Inicio',
  'About': 'Acerca de',
  'Example': 'Ejemplo Redux'
});

const DrawerMenuContent = () => {

  const {t} = useTranslation();
  const history = useHistory();

  function handleGoTo(where) {
    history.push(where);
  }

  return (
    <>
      <List>
        <ListItem button key={"home"} onClick={() => handleGoTo("home")}>
          <ListItemIcon><HomeIcon/></ListItemIcon>
          <ListItemText primary={t("Home")}/>
        </ListItem>
        <ListItem button key={"example"} onClick={() => handleGoTo("example")}>
          <ListItemIcon><GestureIcon/></ListItemIcon>
          <ListItemText primary={t("Example")}/>
        </ListItem>
      </List>
      <Divider/>
      <List>
        <ListItem button key={"about"} onClick={() => handleGoTo("about")}>
          <ListItemIcon><InfoIcon/></ListItemIcon>
          <ListItemText primary={t("About")}/>
        </ListItem>
      </List>
    </>
  );
};

export default DrawerMenuContent;
