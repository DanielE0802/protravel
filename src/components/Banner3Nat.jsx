import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Banner4Nat from '../components/Banner4Nat';
import Banner41Nat from '../components/Banner41Nat';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 900,
    margin: 'auto',
    position: 'center',
        
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Banner4Nat></Banner4Nat>
        </Grid>
        <Grid item xs={4}>
        <Banner41Nat></Banner41Nat>
        </Grid>
        <Grid item xs={4}>
        <Banner4Nat></Banner4Nat>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
