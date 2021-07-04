import React from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import Header from "../components/header/Header";
import HeaderLinks from "../components/header/Headerlinks";
import FooterDemo from '../components/footer/Footer';
const dashboardRoutes = [];

const Destinos = props => {
    const { ...rest } = props;
    return (

        //Header
        <ThemeProvider>
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

      


        <FooterDemo></FooterDemo>
        </ThemeProvider>
    )
}

export default Destinos