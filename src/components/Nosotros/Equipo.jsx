import React from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import Oscar from '../../img/Oscar.jpg';
import Daniel from '../../img/Daniel.jpeg';
import Janeth from '../../img/Janeth.jpeg';
import Alejandra from '../../img/Alejandra.jpeg';
import '../scss/Nosotros.scss';
import AboutUs from './AboutUs';



const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.04)',
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: '1.3rem',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 500,
  },
  cargo: {
    textAlign: 'center',
    color: '#FFF'
  },
  subtitle: {
    fontFamily: 'Roboto',
    color: '#fff',
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 300,
    fontSize: 14,
  },
}));

const CustomCard = ({ classes, image, title, subtitle, cargo }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} style={{ height: 350 }} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={'h1'}>
            {title}
          </Typography>
          <p className={classes.cargo} variant={'h1'}>{cargo}</p>
          <p className={classes.subtitle}>{subtitle}</p>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const SolidGameCardDemo = React.memo(function SolidGameCard() {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: '#0067F5' });
  const styles2 = useStyles({ color: '#0067F5' });
  const styles3 = useStyles({ color: '#0067F5' });
  const styles4 = useStyles({ color: '#0067F5' });
  return (
    <>
      <div >
        <div >
        <AboutUs></AboutUs>
          <Grid  classes={gridStyles} container spacing={4} wrap={'nowrap'} style={{ overflow: 'scroll', width:"90%", margin:"auto" }}>
            <Grid item>
              <CustomCard
                classes={styles}
                title={'Daniel Estupiñan'}
                cargo={'Frontend Developer'}
                subtitle={'Descripcio Descripcio Descripcio Descripcio Descripcio Descripcio Descripcio Descripcio '}
                image={Daniel}
              />
            </Grid>
            <Grid item>
              <CustomCard
                classes={styles2}
                title={'Oscar Restrepo'}
                cargo={'Frontend Developer'}
                subtitle={'Descripcio Descripcio Descripcio Descripcio Descripcio Descripcio Descripcio Descripcio '}
                image={Oscar}
              />
            </Grid>
            <Grid item>
              <CustomCard
                classes={styles3}
                title={'Janeth Rocio'}
                cargo={'Backend Developer'}
                subtitle={'Descripcio Descripcio Descripcio Descripcio Descripcio Descripcio Descripcio Descripcio '}
                image={Janeth}
              />
            </Grid>
            <Grid item>
              <CustomCard
                classes={styles4}
                title={'Alejandra Lozano'}
                cargo={'Backend Developer'}
                subtitle={'Descripcio Descripcio Descripcio Descripcio Descripcio Descripcio Descripcio Descripcio '}
                image={Alejandra}
              />
            </Grid>
          </Grid>
        </div>
        <div style={{marginTop: 50}}>
         
        </div>
      </div>
    </>
  );
});
export default SolidGameCardDemo