import React from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
// import MainSelector from '../components/MainSelector';
// import Destinos from '../components/Destinos';
// // import theme from '../components/theme/themeconfig'
// import Contenedor from '../components/Contenedor'
// import SlidesDestinos from '../components/SlideDestinos'
import SwipeableTextMobileStepper from '../components/SlideTargets'
import SectionsDestiny from '../components/destinos/SectionsDestiny'
// import data from './data/placeHolderDestinos.json'
// const dataDestinos = data.data
import data from '../data/placeHolderDestinos.json'
import Header from "../components/header/Header";
import HeaderLinks from "../components/header/Headerlinks";
const dashboardRoutes = [];
const Destinos = props => {
    const { ...rest } = props;
    return (
        <ThemeProvider>
           <Header
        style={{position:"sticky"}}
        color="transparent"
        routes={dashboardRoutes}
        brand="ProTravel"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "#3EB049",
        }}
        {...rest}
      />
            <SwipeableTextMobileStepper data={data}/>
            <SectionsDestiny data={data}/>
            
        </ThemeProvider>
    )
}

export default Destinos