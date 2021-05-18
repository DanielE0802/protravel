import React from 'react'
import NavBar from '../components/NavBar'
import {ThemeProvider} from '@material-ui/core/styles'
// import theme from '../components/theme/themeconfig'
import Contenedor from '../components/Contenedor'
import SlidesDestinos from '../components/SlideDestinos'

const Home = () => {
    return (
        <ThemeProvider>
            <NavBar></NavBar>
            <SlidesDestinos></SlidesDestinos>
            <Contenedor></Contenedor>
            
        </ThemeProvider>
    )
}

export default Home
