import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./components/User/Login";
import Registro from "./components/User/Register";
import Destinos from "./pages/destinos";
import './components/scss/general.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <switch>
          <Route exact path="/protravel" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Registro} />
          <Route exact path="/destinos" component={Destinos} />
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
