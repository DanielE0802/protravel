import React from 'react';
//MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button'
//IMG//
import ImgBanner from '../img/Pacifico_Colombiano.jpg';
import ImgLogo from '../img/protravel.png';
//CSS//
import './scss/BannerNat.scss'; 
//ENLACES-PAG//
import Banner2Nat from '../components/Banner2Nat';
import Banner3Nat from '../components/Banner3Nat';

const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          position:'center',
        },
        paper: {
          padding: theme.spacing(3),
          margin: 'auto',
          maxWidth: 800,
          backgroundImage: `url("https://cdn.goconqr.com/uploads/node/image/98777543/e115cc0f-7e33-4bd0-9e45-f5122346f87e.jpg")`,

        },
        image: {
          width: 300,
          height: 300,
          borderColor: 'red',
          border: 0,
          borderRadius: 3,
        },
        img: {
          margin: 'auto',
          display: 'block',
          maxWidth: '100%',
          maxHeight: '100%',
          
        },
        boton:{
          marginLeft: 'auto',
          marginRight: 'auto',
          background: 'linear-gradient(45deg, #37D8B1 30%, #11EE68 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 48,
          padding: '0 30px',
        },
        logo:{
          width: 90,
          height: 90,
        },
        titul:{
        fontFamily:'-apple-system',
        color:'#005293',
        fontFamily: 'impact',

        },
        texto:{
          color:'white', 
          textShadowColor: 'black',       
          textShadowOffset: {width: -1, height: 1},
          textShadowRadius: 10, 
        },
        }));
      
export default function ComplexGrid() {
        const classes = useStyles();

        return (
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                  <img className={classes.image}  src={ImgBanner}/>
                  </ButtonBase>
                </Grid>
                     <Grid item xs={12} sm container>
                         <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                              <Typography className={classes.titul} gutterBottom variant="h4" align="center">
                              Información Departamento del Chocó
                              </Typography>
                              <Typography className={classes.texto} variant="h6" gutterBottom>
                              Chocó es uno de los treinta y dos departamentos de Colombia, localizado en el noroeste del país, en la región del Pacífico colombiano. Comprende las selvas del Darién y las cuencas de los ríos Atrato y San Juan. Su capital es la ciudad de Quibdó.                              </Typography>
                              <Typography className={classes.texto} gutterBottom variant="h8"  align="center">
                                ¿Qué hacer en Medellín?
                              </Typography>
                            </Grid>
                            <Button className={classes.boton} href="https://bluuweb.github.io/react-udemy/13-material/#makestyle">Ver más...</Button>
                          </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" >
                      <img className={classes.logo} src={ImgLogo}/>
                      </Typography>
                     </Grid>
                </Grid>
              </Grid>
            </Paper>
            <br></br>
            <Banner3Nat></Banner3Nat>
            <br></br>
            <Banner2Nat></Banner2Nat>
            <br></br>
            <div>
            </div>
          </div>
     );
}
