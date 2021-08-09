import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "../components/header/Header";
import HeaderLinks from "../components/header/Headerlinks";
import FooterDemo from "../components/footer/Footer";
import '../components/scss/general.scss'
import Map from '../components/destinos/Map'
import Planea from '../components/PlaneaTuViaje/Planea'
import '../components/scss/planea.scss'

const dashboardRoutes = [];
const Home = (props) => {
    const { ...rest } = props;
    return (
        <ThemeProvider>
            <div
            >
                {/* <NavBar></NavBar> */}
                <Header
                    style={{ position: "sticky" }}
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
                <div className="PlaneaContainer">
                    <div className="Planea">
                        <Planea></Planea>
                    </div>

                    <div className="Mapa">
                        <Map></Map>
                    </div>
                </div>
                <FooterDemo style={{ backgroundColor: "#fff" }}></FooterDemo>

            </div>
        </ThemeProvider>
    );
};

export default Home;
