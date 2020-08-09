import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
// import BackgroundImage from "../resources/wallpaper-grid-grey.png";
import {PrivateAppBar} from './appbars';
import {DrawerMenu} from "../../drawer-menu/components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '100vh',
      // overflow: 'auto',
      // color: 'white',
      // background: `url(${BackgroundImage})`,
      backgroundColor: '#f2f2f2',
      minWidth: "fit-content"
    }
  })
);

const PrivateContainer = ({title, children, ...rest}: { title: string, children? } & Record<string, any>) => {

  const classes = useStyles();


  return (
    <div className={classes.root} {...rest}>
      <PrivateAppBar title={title}/>
      <DrawerMenu>
        {children}
      </DrawerMenu>
    </div>
  );
};

export default PrivateContainer;
