import React from "react";
// import NavBar from "../components/NavBar";
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
import MainSelector from "../components/MainSelector";
import SlidePlanes from "../components/SlidePlanes";
import Search from "../components/Search";
import Header from "../components/Header";
import HeaderLinks from "../components/Headerlinks";
// import ProductHowItWorks from "../components/ProductHowItWorks";
const dashboardRoutes = [];
const Home = (props) => {
  const { ...rest } = props;
  return (
    <ThemeProvider>
      <div
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(36,36,36,.8)",
        }}
      >
        {/* <NavBar></NavBar> */}
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
        <div className="homepage"></div>
        <Search></Search>
        <MainSelector />
        <SlidePlanes></SlidePlanes>
      </div>
    </ThemeProvider>
  );
};

export default Home;
