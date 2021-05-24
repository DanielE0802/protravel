import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ImagenPlanea from '../img/planea_tu_viaje.jpg';
import ImagenDestinos from '../img/destinos.jpg';
import ImagenVariedades from '../img/variedades.jpg';
import ImagenComunidad from '../img/comunidad.jpg';
import ImagenPromos from '../img/promos.jpg';

const images = [
  {
    url: ImagenPlanea,
    title: 'Planea tu viaje',
    width: '20%',
    href:"/planeaTuViaje",
  },
  {
    url: ImagenDestinos,
    title: 'Destinos',
    width: '20%',
    href:"/destinos",
  },
  {
    url: ImagenVariedades,
    title: 'Variedades',
    width: '20%',
    href:"/variedades",
  },
  {
    url: ImagenComunidad,
    title: 'Comunidad',
    width: '20%',
    href:"/comunidad",
  },
  {
    url: ImagenPromos,
    title: 'Promos',
    width: '20%',
    href:"/promos",
  },
];

const useStyles = makeStyles((theme) => ({
  div:{
    display:"flex",
    justifyContent:"center",
    marginBottom:"5vw"
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '94%',
    border:"4px solid rgba(255, 255, 255, 0.8)",
    borderRadius: "4px"
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function MainSelector() {
  const classes = useStyles();

  return (
    <div className={classes.div} >
<div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
        
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
        <a href={image.href}>
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
          </a>
        </ButtonBase>
      ))}
    </div>
    </div>
    
  );
}