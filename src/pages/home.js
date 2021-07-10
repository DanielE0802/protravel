import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import MainSelector from "../components/home/MainSelector";
import SlidePlanes from "../components/home/SlidePlanes";
import Search from "../components/home/Search";
import Header from "../components/header/Header";
import HeaderLinks from "../components/header/Headerlinks";
import FooterDemo from "../components/footer/Footer";
import '../components/scss/general.scss'


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
          color: "dark",
          
        }}
        {...rest}
      />
        <div className="homepage"></div>
        <Search></Search>
        <MainSelector />
        <SlidePlanes></SlidePlanes>
       
        <FooterDemo style={{backgroundColor:"#fff"}}></FooterDemo>

      </div>
    </ThemeProvider>
  );
};

export default Home;
