import {ClickAwayListener, createStyles, Theme, Tooltip} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React, {ReactNode, useState} from "react";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tooltipPopper: {
      zIndex: 1050,
    },
  }));

const TooltipIconButton = ({title, children, interactive, ...rest}: {
  title: string, children: ReactNode; interactive?: boolean
} & Record<string, any>) => {

  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipToggle = () => {
    setOpen(!open);
  };

  const onClickButton = (event) => {
    handleTooltipToggle();
    if (rest.onClick) {
      rest.onClick(event);
    }
  };


  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <Tooltip title={title}
                 classes={{popper: classes.tooltipPopper}}
                 interactive={interactive}
                 PopperProps={{disablePortal: true}}
                 onClose={handleTooltipClose}
                 open={open}
                 disableFocusListener
                 disableHoverListener
                 disableTouchListener
        >
          <IconButton onClick={onClickButton} {...rest}>
            {children}
          </IconButton>
        </Tooltip>
      </div>
    </ClickAwayListener>)
};

export default TooltipIconButton;
