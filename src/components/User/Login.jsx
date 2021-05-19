import React from 'react';
import '../scss/Login.css';
import Imagen1 from '../../img/LoginIMG.jpg';
import { Button, TextField, Grid } from '@material-ui/core';
import Back from '../Back';


class LogIn extends React.Component {
    render() {
        return (
            <Grid container className="contenedor">
                <Grid item xs={0} md={5}>
                    <img className="imagen" src={Imagen1} alt="" />
                </Grid>


                <Grid className="texto" item xs={12} md={7 }>
                <Grid style={{ transform: "translate(-300px, 10px)" }}>
                    <Back />
                </Grid>
                    <form >
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
                    <div>
                        <a href="/contraseña"><h6 className="Recuperar_contraseña">Olvidé mi contraseña</h6></a>
                    </div>
                    <br />
                    <Button variant="contained" color="primary">
                        Ingresar
                        </Button>
                    <Button className="boton" variant="contained" color="primary" href="/register">
                        Registrarse
                        </Button>
                </Grid>

                
            </Grid>


        );
    };
};

export default LogIn;
