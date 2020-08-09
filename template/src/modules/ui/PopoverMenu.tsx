import React, {useEffect, useState} from "react";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }),
);

export default function PopoverMenu(
  {
    open, anchorEl, children,
    handleClose, placement, onClickAway
  }: any) {
  const classes = useStyles({});
  // const anchorRef = React.useRef<HTMLButtonElement>(null);

  const [enableClickAwayListener, setEnableClickAwayListener] = useState<boolean>(false);

  onClickAway = (event: React.MouseEvent<EventTarget>) => {
    if (enableClickAwayListener) {
      setEnableClickAwayListener(false);
      handleClose();
    }
  };

  useEffect(() => {
    setTimeout(() => setEnableClickAwayListener(open), 250);
  }, [open]);

  return (<>
      <Popper open={open} anchorEl={anchorEl && anchorEl.current ? anchorEl.current : anchorEl}
              style={{zIndex: 400100}} transition placement={placement}
              disablePortal>
        {({TransitionProps, placement}) => (
          <Grow
            {...TransitionProps}
            style={{
              minWidth: anchorEl ? anchorEl.clientWidth / 1.1 : 0,
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
            }}
            // timeout={350}
          >
            <Paper id="menu-list-grow">
              <ClickAwayListener onClickAway={onClickAway}>
                <MenuList>
                  {children}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
