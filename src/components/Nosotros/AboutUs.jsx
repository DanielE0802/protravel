import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
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
  content: {
    padding: 24,
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
  const shadowStyles = useBouncyShadowStyles();
  return (
    <Card className={cx(styles.root)}>
      <CardMedia className={(styles.img)}
        classes={mediaStyles}
        image={Logo}
      />
      <CardContent className={styles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={'Turismo y viajes a otro nivel'}
          heading={'Sobre Nosotros'}
          body={
            'Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros Sobre nosotros '
          }
        />
      </CardContent>
    </Card>
  );
});

export default NewsCardDemo