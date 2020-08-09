import React, {ReactNode} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {CssBaseline} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBarShift: {
      width: (props: any) => `calc(100% - ${props.drawerWidth}px)`,
      marginLeft: (props: any) => props.drawerWidth,
      // [theme.breakpoints.down('xs')]: {
      //   width: "0%!important",
      //   marginLeft:"100%!important"
      // },
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    appBar:
      {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }
    ,
    hide: {
      display: 'none',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginLeft: 8,
      fontStyle:
        'italic'
    },
    grow: {
      flexGrow: 1,
    },
    sectionDesktop: {
      display: 'flex',
      [theme.breakpoints.up('md')]:
        {
          justifyContent: 'space-between',
          flexGrow:
            0.01,
        }
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]:
        {
          display: 'none',
        }
    }
  }),
);

interface AppToolbarDrawerMenuConfig {
  width: number;
  handleOpen: () => any;
  open: boolean
}

interface AppToolbarProps {
  title: string;
  drawerMenuConfig?: AppToolbarDrawerMenuConfig
  children?: ReactNode
}

const AppToolbar = ({title, drawerMenuConfig, children}: AppToolbarProps) => {
  const classes = useStyles({drawerWidth: drawerMenuConfig.width});

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: drawerMenuConfig.open,
              })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={drawerMenuConfig.handleOpen}
            edge="start"
            className={clsx(classes.menuButton, drawerMenuConfig.open && classes.hide)}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            {title}
          </Typography>
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppToolbar;
