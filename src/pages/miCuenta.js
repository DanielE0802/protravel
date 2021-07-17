import React from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import Header from "../components/header/Header";
import HeaderLinks from "../components/header/Headerlinks";
import FooterDemo from '../components/footer/Footer'
import MiCuenta from '../components/User/cuentaMenu'
import '../components/scss/general.scss';
const dashboardRoutes = [];
const Destinos = props => {
    const { ...rest } = props;
    return (
        <ThemeProvider>
      
           <Header
        style={{position:"sticky"}}
        color="dark"
        routes={dashboardRoutes}
        brand="ProTravel"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 70,
          color: "dark",
        }}
        {...rest}
      />
           <MiCuenta></MiCuenta>
            <FooterDemo></FooterDemo>
        </ThemeProvider>
    )
}

export default Destinos