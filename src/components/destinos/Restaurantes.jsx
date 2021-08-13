import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../scss/destinos.scss';
import Restaurante from '../../img/restaurantes.jpg';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={(classes.root, "TarjetaRestaurante")}>
      <CardHeader
        title="Nombre Restaurante"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={Restaurante}
        title="Nombre Restaurante"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Descripcion restaurante. Descripcion restaurante. Descripcion restaurante. Descripcion restaurante. Descripcion restaurante. Descripcion restaurante. Descripcion restaurante. Descripcion restaurante.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Platillos:</Typography>
          <Typography paragraph>
            » Platillo 1
            <br />
            » Platillo 2
            <br />
            » Platillo 3
            <br />
            » Platillo 4
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}