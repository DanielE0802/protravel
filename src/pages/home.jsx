import React from "react";
import NavBar from "../components/NavBar";
import { ThemeProvider } from "@material-ui/core/styles";
// import SlidePlanes from '../components/SlidePlanes'
// import BannerHomePage from '../components/BannerHomePage'
// import MainSelector from '../components/MainSelector';
// import Destinos from '../components/Destinos';
// // import theme from '../components/theme/themeconfig'
// import Contenedor from '../components/Contenedor'
// import SlidesDestinos from '../components/SlideDestinos'
// import SwipeableTextMobileStepper from "../components/SlideTargets";
// import SectionsDestiny from "../components/SectionsDestiny";
import Search from "../components/Search";
import Destinos from "../components/Destinos";
import MainSelector from "../components/MainSelector";
import SlidePlanes from "../components/SlidePlanes";


const Home = () => {
  return (
    <ThemeProvider>
      <NavBar></NavBar>
      <Search />
      <MainSelector />
      <Destinos />
      <SlidePlanes></SlidePlanes>
    </ThemeProvider>
  );
};

export default Home;
