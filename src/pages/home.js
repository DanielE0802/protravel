import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import MainSelector from "../components/home/MainSelector";
import SlidePlanes from "../components/home/SlidePlanes";
import Search from "../components/home/Search";
import Header from "../components/header/Header";
import HeaderLinks from "../components/header/Headerlinks";
import FooterDemo from "../components/footer/Footer";
import '../components/scss/general.scss'
import '../components/scss/home.scss'
import dataHome from '../data/dataHome.json'

const dashboardRoutes = [];
const Home = (props) => {
  const { ...rest } = props;

  
  
  return (
    <ThemeProvider>
      <div className="container-home"
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
        <SlidePlanes title="Nuestro" subtitle="Pacifico Colombiano" data={dataHome[1]}></SlidePlanes>
        <SlidePlanes title="Nuestros" subtitle="Atracciones sugeridas" data={dataHome[2]}></SlidePlanes>

        <SlidePlanes title="Nuestros" subtitle="Lugares sugeridos" data={dataHome[0]}></SlidePlanes>
    
        <SlidePlanes title="Nuestros" subtitle="Deportes sugeridos" data={dataHome[3]}></SlidePlanes>
        <FooterDemo style={{backgroundColor:"#fff"}}></FooterDemo>

      </div>
    </ThemeProvider>
  );
};

export default Home;
