import React from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import Header from "../components/header/Header";
import ResultadoHoteles from "../components/ResultadoHoteles";
import HeaderLinks from "../components/header/Headerlinks";
import dataHoteles from '../data/dataHoteles.json'
import Map from "../components/destinos/Map"
import Footer from '../components/footer/Footer'

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
          height: 200,
          color: "dark",
        }}
        {...rest}
      />

      <ResultadoHoteles data={dataHoteles.data} ></ResultadoHoteles>
      <Map></Map>
          
            <Footer></Footer>
        </ThemeProvider>
    )
}

export default Destinos