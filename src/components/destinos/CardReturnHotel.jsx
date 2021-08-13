import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 900,
  },
  image: {
    width: 400,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid(props) {
  const classes = useStyles();





  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>

            <Link to={props.to}>

            <ButtonBase className={classes.image}>
              <img loading="lazy" className={classes.img} alt="complex" src={props.src} style={{ width: '100%' }}/>
            </ButtonBase>
            </Link>

          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.nombre}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Descripción: {props.descripcion}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                {props.extra}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer', color: '#0067F5'}}>
                  Mas Info
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}