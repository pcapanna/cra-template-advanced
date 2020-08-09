import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import InfoIcon from '@material-ui/icons/Info';
import DrinkIcon from '@material-ui/icons/LocalBar';
import {TooltipIconButton} from "../../ui";
import {Card, Divider} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      textAlign: 'left',
      maxWidth: 900,
      marginBottom: theme.spacing(4),
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: `${theme.spacing(4)}px ${theme.spacing(3)}px`,
    },
    avatar: {
      marginRight: 30,
      backgroundColor: theme.palette.primary.main
    },
    InfoIcon: {
      color: "grey"
    },
    DrinkIcon: {
      color: "#ceb80c"
    }
  }),
);

const randBetween = (a, b) => {
  return Math.floor(Math.random() * (b - a + 1)) + a
};

const randBoolean = (): boolean => {
  return Math.floor(randBetween(0, 1)) === 1;
};

const ProductPreview = ({product, ...rest}) => {
  const classes = useStyles();

  return (
    <Card className={classes.paper} {...rest}>
      <Grid container spacing={4}>
        <Grid item xs={12} style={{display: 'flex', alignItems: 'center'}}>
          <Avatar className={classes.avatar}>P</Avatar>
          <Typography variant={"h5"} style={{flexGrow: 1}}>{product.title}</Typography>
          <TooltipIconButton title={"Info?"}
                             interactive={true}
                             aria-label="product info" color="inherit">
            <InfoIcon className={classes.InfoIcon}/>
          </TooltipIconButton>
        </Grid>
        <Divider/>
        <Grid item xs={12}>
          <Typography
            variant={"h4"}>{product.name}</Typography>
        </Grid>
        <Divider/>
        <Grid item xs={12} md={6}>
          <span> {product.description ? product.description : "No Description"}</span>
        </Grid>
        <Grid item xs={12} md={6} style={{textAlign: 'right'}}>
          <span> Quedan: 33/ 40</span>
        </Grid>

      </Grid>
    </Card>
  );
};

export default ProductPreview;
