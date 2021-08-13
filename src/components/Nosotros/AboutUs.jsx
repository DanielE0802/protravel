import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import Logo from '../../img/logo_horizontal.png'
import '../scss/Nosotros.scss';


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '100%',
    margin: 'auto',
    boxShadow: 'none',
    borderRadius: 0,
  },
  img: {
    maxHeight: 500,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export const NewsCardDemo = React.memo(function NewsCard() {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  return (
    <Card className={cx(styles.root)}>
      <CardMedia className={(styles.img)}
        style={{width:"80vw", height:"100px", paddingBottom:"30vh", margin:"auto"}}
        classes={mediaStyles}
        image={Logo}
      />
      <CardContent className={styles.content}
        style={{width:"80vw", height:"50vh", paddingBottom:"30vh", margin:"auto",}}>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={'Turismo y viajes a otro nivel'}
          heading={'Misión'}
          body={
            'Dar a conocer destinos turísticos e integrar todas las culturas, lugares emblemáticos, actividades ecológicas que se realizan en cada región permitiéndole a los viajeros organizar, planear, y ejecutar su viaje de forma óptima con paquetes de viaje accesibles y a la medida según sus  necesidades. '
          }
        />
        <TextInfoContent
          classes={textCardContentStyles}
          overline={''}
          heading={'Visión'}
          body={
            'ProTravel en 10 años busca ser una de las mejores plataformas para viajeros de Latinoamérica aumentando el turismo en regiones que son poco conocidas por los viajeros e implementando nuevas formas de hacer turismo.  '
          }
        />
        
      </CardContent>
    </Card>
  );
});

export default NewsCardDemo