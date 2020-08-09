import React, {ReactNode} from 'react';
import clsx from 'clsx';
import {createStyles, makeStyles, Theme, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    drawer: {
      // [theme.breakpoints.down('xs')]: {
      //   width: "100%"
      // },
      width: (props: any) => props.width,
      flexShrink: 0,
    },
    drawerPaper: {
      // [theme.breakpoints.down('xs')]: {
      //   width: "100%"
      // },
      width: (props: any) => props.width,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      // padding: theme.spacing(1),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: (props: any) => `-${props.width}`,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: "0!important",
    },
  }),
);

const PersistentDrawerMenu = (
  {
    open, handleClose, handleToggle, drawerContent, children, width = 400
  }: {
    open: boolean;
    handleClose: () => any;
    handleToggle: () => any;
    drawerContent: ReactNode;
    children?: ReactNode
    width?: number
  }
) => {

  const theme = useTheme();
  let customWidth = `${width}px`;
  // if (useMediaQuery(muiTheme.breakpoints.down('xs'))) {
  //   customWidth = "100%";
  // }

  const classes = useStyles({width: customWidth});
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
          </IconButton>
        </div>
        <Divider/>
        {drawerContent}
      </Drawer>
      <main className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}>
        <div className={classes.drawerHeader}/>
        {children}
      </main>
    </div>
  );
};

export default PersistentDrawerMenu;
