import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import PuntuacionReadOnly from './PuntuacionReadOnly';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '80%',
    marginTop: 50,
    marginLeft: '10%',

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            D
          </Avatar>
        }
        title="Daniel Estupiñan Ramos"
        subheader="Mayo 23, 2021"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Oscar, te quedo perfecto, gracias por tu trabajo. :)
          <br />
          Texto de relleno. Texto de relleno. Texto de relleno. Texto de relleno. Texto de relleno.
          Texto de relleno. Texto de relleno. Texto de relleno. Texto de relleno. Texto de relleno.
          Texto de relleno. Texto de relleno. Texto de relleno. Texto de relleno. Texto de relleno.
          Texto de relleno. Texto de relleno. Texto de relleno. Texto de relleno. Texto de relleno.
          Texto de relleno. Texto de relleno. Texto de relleno. Texto de relleno. Texto de relleno.
          Texto de relleno. Texto de relleno. Texto de relleno. Texto de relleno. Texto de relleno.
          Texto de relleno. Texto de relleno. Texto de relleno. Texto de relleno. Texto de relleno.
          Texto de relleno. Texto de relleno. Texto de relleno. Texto de relleno. Texto de relleno.
          Texto de relleno. Texto de relleno. Texto de relleno. Texto de relleno. Texto de relleno.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <PuntuacionReadOnly />
      </CardActions>
    </Card>
  );
}