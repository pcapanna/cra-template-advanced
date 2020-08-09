import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppLogo from "../../../../resources/logo.svg";
import {Icon, SvgIcon} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      color: 'black',
      marginLeft: 8,
      fontStyle: 'italic'
    },
    grow: {
      flexGrow: 1,
    },
  }),
);

export default function PublicAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <IconButton disabled style={{top: -2}} size={"medium"}>
            <Icon>
              <img src={AppLogo} />
            </Icon>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
          <div className={classes.grow}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
