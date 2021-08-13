import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Equipo from "../components/Nosotros/Equipo"
import Header from "../components/header/Header";
import HeaderLinks from "../components/header/Headerlinks";
import SlideDestiny from "../components/general/SlideDestiny";
import FooterDemo from "../components/footer/Footer";
import '../components/scss/general.scss'


const dashboardRoutes = [];
const Home = (props) => {
  const { ...rest } = props;
  return (
    <ThemeProvider>
      <div
        style={{
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
          height: 100,
          color: "dark",
          
        }}
        {...rest}
      />
<SlideDestiny></SlideDestiny>

<Equipo></Equipo>
        <FooterDemo style={{backgroundColor:"#fff"}}></FooterDemo>
  
      </div>
    </ThemeProvider>
  );
};

export default Home;
