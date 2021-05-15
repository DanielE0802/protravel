import React from 'react';
import './scss/Login.css';
import Imagen1 from '../img/LoginIMG.jpg';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class LogIn extends React.Component {
    render() {
        return (
            <div className="LoginContainer">
                <img className="imagen" src={Imagen1} />

                <div className="LoginTexto">

                    <h2>Ingresa con tu cuenta</h2>
                    <h4>Es fácil y rápido</h4>
                    <form>
                        <h4 className="TextoInput">Correo electronico</h4>
                        <TextField
                            label="Ingrese su correo electronico"
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
                    <Button className="boton" variant="contained" color="primary">
                        Ingresar
                        </Button>
                </div>
            </div>
        );

    };
};

export default LogIn;