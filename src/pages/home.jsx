import React from 'react'
import NavBar from '../components/NavBar'
import {ThemeProvider} from '@material-ui/core/styles'
import SlidePlanes from '../components/SlidePlanes'
import BannerHomePage from '../components/BannerHomePage'
// import MainSelector from '../components/MainSelector';
// import Destinos from '../components/Destinos';
// // import theme from '../components/theme/themeconfig'
// import Contenedor from '../components/Contenedor'
// import SlidesDestinos from '../components/SlideDestinos'

const Home = () => {
    return (
        <ThemeProvider>
            <NavBar></NavBar>
            <SlidePlanes/>
        </ThemeProvider>
    )
}

export default Home
