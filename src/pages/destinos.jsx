import React from 'react'
import NavBar from '../components/NavBar'
import {ThemeProvider} from '@material-ui/core/styles'
// import MainSelector from '../components/MainSelector';
// import Destinos from '../components/Destinos';
// // import theme from '../components/theme/themeconfig'
// import Contenedor from '../components/Contenedor'
// import SlidesDestinos from '../components/SlideDestinos'
import SwipeableTextMobileStepper from '../components/SlideTargets'
import SectionsDestiny from '../components/SectionsDestiny'

const Destinos = () => {
    return (
        <ThemeProvider>
            <NavBar></NavBar>
            <SwipeableTextMobileStepper/>
            <SectionsDestiny/>
            
        </ThemeProvider>
    )
}

export default Destinos