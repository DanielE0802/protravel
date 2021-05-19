import React from "react";
import "../scss/Login.css";
import Imagen1 from "../../img/LoginIMG.jpg";
import { Button, TextField, Grid } from "@material-ui/core";

class LogIn extends React.Component {
  render() {
    return (
      <Grid container className="contenedor">
        <Grid item xs={0} md={6}>
          <img className="imagen" src={Imagen1} />
        </Grid>

        <Grid className="texto" item xs={12} md={6}>
          <form>
            <h2>Ingresa con tu cuenta</h2>
            <h4>Es fácil y rápido</h4>
            <h4 className="TextoInput">Correo electronico</h4>
            <TextField
              label="Ingrese su correo"
              color="primary"
              className="InputMaterial correo"
              variant="outlined"
              type="email"
            />
            <h4 className="TextoInput">Contraseña</h4>
            <TextField
              label="Ingrese su contraseña"
              color="primary"
              className="contraseña"
              type="password"
              variant="outlined"
            />
          </form>
          <a href={"https://www.google.com"} className="Recuperar_contraseña">
            <h6>Olvidé mi contraseña</h6>
          </a>
          <Button className="boton" variant="contained" color="primary">
            Ingresar
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default LogIn;
