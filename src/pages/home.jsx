import React from 'react'
import NavBar from '../components/NavBar'
import {ThemeProvider} from '@material-ui/core/styles'
// // import theme from '../components/theme/themeconfig'
// import Contenedor from '../components/Contenedor'
import SlidesDestinos from '../components/SlideDestinos'
import SwipeableTextMobileStepper from '../components/SlideTargets'
import SectionsDestiny from '../components/SectionsDestiny'

const Home = () => {
    return (
        <ThemeProvider>
            <NavBar></NavBar>
            <SwipeableTextMobileStepper/>
            <SectionsDestiny/>
        </ThemeProvider>
    )
}

export default Home
