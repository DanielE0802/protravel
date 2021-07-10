import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ParallaxSlide from '@mui-treasury/components/slide/parallax';
import DotIndicator from '@mui-treasury/components/indicator/dot';

const data = [
  {
    id: 1,
    image:
      'https://i.pinimg.com/originals/6d/81/e7/6d81e72d296fbd5a331bdc9c99d7c844.jpg',
  },
  {
    id: 2,
    image:
      'https://elcampesino.co/wp-content/uploads/2016/07/e6-1024x685.jpg',
  },
  {
    id: 3,
    image:
      'https://awake.travel/blog/wp-content/uploads/2018/01/Playas-santa-marta.png',
  },
];

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
  root: {
    // a must if you want to set arrows, indicator as absolute
    position: 'relative',
    width: '100%',
    marginTop:'-100px'
  },
  slide: {
    perspective: 1000, // create perspective
    overflow: 'hidden',
    // relative is a must if you want to create overlapping layers in children
    position: 'relative',
    paddingTop: '0px',
    [breakpoints.up('sm')]: {
      paddingTop: '0px',
    },
    [breakpoints.up('md')]: {
      paddingTop: '0px',
    },
  },
  imageContainer: {
    display: 'block',
    position: 'relative',
    height:'400px',
    zIndex: 2,
    paddingBottom: '200px',
  },
  image: {
    display: 'block',
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '120%',
    objectFit: 'cover',
    marginLeft: '0%',
    [breakpoints.up('sm')]: {
      marginLeft: '0px',
    },
  },
  indicatorContainer: {
    textAlign: 'center',
  },
}));

const ParallaxCarousel = () => {
  const classes = useStyles();
  const renderElements = ({ index, onChangeIndex }) => (
    <>
      <div className={classes.indicatorContainer}>
        {data.map(({ id }, i) => (
          <DotIndicator
            key={id}
            active={i === index}
            onClick={() => onChangeIndex(i)}
          />
        ))}
      </div>
    </>
  );
  const renderChildren = ({ injectStyle, fineIndex }) =>
    data.map(({ id, title, subtitle, image }, i) => (
      <div key={id} className={classes.slide}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={image} alt={'slide'} />
        </div>
      </div>
    ));
  return (
    <div className={classes.root}>
      <ParallaxSlide renderElements={renderElements}>
        {renderChildren}
      </ParallaxSlide>
    </div>
  );
};

export default ParallaxCarousel;