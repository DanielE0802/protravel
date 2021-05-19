import React from 'react'
import NavBar from '../components/NavBar'
import {ThemeProvider} from '@material-ui/core/styles'
import MainSelector from '../components/MainSelector';
import Destinos from '../components/Destinos';
// // import theme from '../components/theme/themeconfig'
// import Contenedor from '../components/Contenedor'
// import SlidesDestinos from '../components/SlideDestinos'

const Home = () => {
    return (
        <ThemeProvider>
            <NavBar></NavBar>
            <MainSelector />
            <Destinos />
        </ThemeProvider>
    )
}

export default Home
