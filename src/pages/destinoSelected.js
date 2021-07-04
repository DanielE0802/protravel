import React from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import SwipeableTextMobileStepper from '../components/SlideTargets'
import SectionsDestiny from '../components/destinos/SectionsDestiny'
import data from '../data/placeHolderDestinos.json'
import Header from "../components/header/Header";
import HeaderLinks from "../components/header/Headerlinks";
import FooterDemo from '../components/footer/Footer'

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
          height: 70,
          color: "dark",
        }}
        {...rest}
      />
      <div className="homeDestinySelected">
      </div>
        <SwipeableTextMobileStepper data={data}/>
        <SectionsDestiny data={data}/>
  
           
            <FooterDemo></FooterDemo>
        </ThemeProvider>
    )
}

export default Destinos