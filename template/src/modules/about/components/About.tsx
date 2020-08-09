import React from 'react';
import Paper from '@material-ui/core/Paper';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AboutParagraphs from "./AboutParagraphs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      textAlign: 'left',
      maxWidth: 900,
      margin: `${theme.spacing(4)}px auto`,
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    },
    settingIcon: {
      color: theme.palette.primary.dark
    }
  }),
);

const About = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={4}>
        {AboutParagraphs.getParagraphs().map((paragraph) => (
          <Grid item xs={12}>
            {paragraph}
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default About;
