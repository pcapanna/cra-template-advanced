import React, {useState} from 'react';
import {Avatar, createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import useUser from "../hooks/useUser";
import PopoverMenu from "../../ui/PopoverMenu";
import {useLogoutFailure, useLogoutSuccess} from "../hooks";
import IconButton from "@material-ui/core/IconButton";
import GoogleLogoutMenuItem from "./google/GoogleLogoutMenuItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 0,
      marginLeft: 12,
      marginRight: 12,
    },
  }),
);


const ProfileAvatar = () => {

  const classes = useStyles();
  const user = useUser();
  const name = user ? user.name : "Unknown";
  const imageUrl = user ? user.imageUrl : undefined;

  const onLogoutSuccess = useLogoutSuccess();

  const onLogoutFailure = useLogoutFailure();

  const [anchorEl, setAnchorEl] = useState(null);

  const toggleMenu = (event) => {
    if (anchorEl != event.currentTarget) {
      setAnchorEl(event.currentTarget)
    } else {
      setAnchorEl(null)
    }
  };

  return (
    <>
      <IconButton
        className={classes.root}
        edge="end"
        aria-label="account of current user"
        aria-controls={'account'}
        aria-haspopup="true"
        color="inherit"
        onClick={toggleMenu}
        disabled={!user}
      >
        <Avatar alt={name} src={imageUrl}/>
      </IconButton>
      <PopoverMenu open={Boolean(anchorEl)} anchorEl={anchorEl}
                   handleClose={() => setAnchorEl(null)} placement="bottom-end">

        <GoogleLogoutMenuItem onLogout={onLogoutSuccess}/>
      </PopoverMenu>
    </>
  );
};

export default ProfileAvatar;
