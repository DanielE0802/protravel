import React from 'react';
import './scss/Back.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        href="/"
        variant="contained"
        color="primary"
        className={(classes.button, "back")}
        startIcon={<ArrowBackIosIcon />}
      >
        Back
      </Button>
      
    </div>
  );
}