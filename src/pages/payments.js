import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "../components/header/Header";
import HeaderLinks from "../components/header/Headerlinks";
import FooterDemo from "../components/footer/Footer";
import Checkout from "../components/Payments/Checkout";


const dashboardRoutes = [];
const Payments = (props) => {
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
          height: 80,
          color: "dark",
          
        }}
        {...rest}
      />
        <div className="homepage"   style={{background:"url(https://awake.travel/storage/courses/1570748131178881.jpg)", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
        }}></div>
       
        <Checkout></Checkout>
      </div>
    </ThemeProvider>
  );
};

export default Payments;
