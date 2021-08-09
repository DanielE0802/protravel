import React, {useState} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./components/User/Login";
import Registro from "./components/User/Register";
import Destinos from "./pages/destinos";
import promos from "./pages/promos"
import variedades from "./pages/variedades"
import comunidad from "./pages/comunidad"
import destinoSelected from "./pages/destinoSelected"
import payments from "./pages/payments"
import cuenta from "./pages/miCuenta"
import homeLogin from "./pages/homeLogin"
import planeaTuViaje from "./pages/planeatuviaje"
import nosotros from "./pages/nosotros"
import './components/scss/general.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Registro} />
          <Route exact path="/destinos" component={Destinos} />
          <Route exact path="/promos" component={promos} />
          <Route exact path="/variedades" component={variedades} />
          <Route exact path="/comunidad" component={comunidad} />
          <Route exact path="/destinos/cartagena" component={destinoSelected} />
          <Route exact path="/checkout" component={payments} />
          <Route exact path="/cuenta" component={cuenta} />
          <Route exact path="/homeLogin" component={homeLogin} />
          <Route exact path="/nosotros" component={nosotros} />
          <Route exact path="/planeaTuViaje" component={planeaTuViaje} />
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
