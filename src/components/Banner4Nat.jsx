import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImgBanner from '../img/Quibdo.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    width: 300,
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img className={classes.media} src={ImgBanner}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bienvenidos a Quibdó.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Quibdó es un municipio colombiano, capital del departamento del Chocó y una de las poblaciones más importantes en la Región del Pacífico Colombiano. La ciudad está ubicada en una de las regiones más biodiversas de Colombia, cerca de grandes reservas ecológicas como el parque nacional natural Emberá.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Boton 1
        </Button>
        <Button size="small" color="primary">
          Boton 2
        </Button>
      </CardActions>
    </Card>
  );
}
