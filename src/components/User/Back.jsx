import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import '../scss/user.scss';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons(props) {
  const classes = useStyles();

  return (
    <div style={{color: "#FFF"}}>
      <Button
        href="/"
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<ArrowBackIosIcon />}
      >
        Back
      </Button>
      
    </div>
  );
}