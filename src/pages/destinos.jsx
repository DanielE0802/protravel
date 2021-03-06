import React from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import Header from "../components/header/Header";
import ResultadoDestinos from "../components/ResultadoDestinos";
import HeaderLinks from "../components/header/Headerlinks";
import dataHoteles from '../data/dataHoteles.json'
import Map from "../components/destinos/Map"
import Footer from '../components/footer/Footer'
import SlideDestiny from "../components/general/slideDestiny"
import SearchDestiny from '../components/general/SearchDestiny';
import "../components/scss/destinos.scss"

const dashboardRoutes = [];


const Destinos = props => {
    const { ...rest } = props;
    return (
        <ThemeProvider>
           <Header
        style={{position:"sticky" }}
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
      <SlideDestiny></SlideDestiny>
      <div className="containerDestiny">

      
      <div className="leftDestiny">
      <SearchDestiny></SearchDestiny>
      <ResultadoDestinos data={dataHoteles.data} ></ResultadoDestinos>

      </div>
      <div className="rigthDestiny">
      <Map></Map>
      </div>
      </div>

          
            <Footer></Footer>
        </ThemeProvider>
    )
}

export default Destinos