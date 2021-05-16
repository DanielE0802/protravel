import React from 'react';
import './scss/register.css';
import Imagen1 from '../img/LoginIMG.jpg';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

class Registro extends React.Component {
    render() {
        return (
            <div className="LoginContainer">
                <img className="imagen" src={Imagen1} />

                <div className="LoginTexto">
                    <h2>Registrate</h2>
                    <h4>Es fácil y rápido</h4>
                    <form>
                    <h4 className="TextoInput">Nombre completo</h4>
                        <TextField
                            label="Ingrese su nombre"
                            color="primary"
                            className="InputMaterial correo"
                            variant="outlined"
                            size="small"
                        />
                        <h4 className="TextoInput">Correo electronico</h4>
                        <TextField
                            label="Ingrese su correo electronico"
                            color="primary"
                            className="InputMaterial correo"
                            variant="outlined"
                            type="email"
                            size="small"
                        />
                        <h4 className="TextoInput">Contraseña</h4>
                        <TextField
                            label="Ingrese su contraseña"
                            color="primary"
                            className="contraseña"
                            type="password"
                            variant="outlined"
                            size="small"
                        />
                        <TextField
                            label="Confirme su contraseña"
                            color="primary"
                            className="contraseña"
                            type="password"
                            variant="outlined"
                            size="small"
                        />
                        <InputLabel id="label">Tipo de cuenta</InputLabel>
                        <Select labelId="label" id="select">
                            <MenuItem value="Nativo">Nativo</MenuItem>
                            <MenuItem value="Persona Natural">Persona natural</MenuItem>
                            <MenuItem value="Turista">Turista</MenuItem>
                        </Select>
                        <InputLabel id="label">Ciudad de residencia</InputLabel>
                        <Select labelId="label" id="select">
                            <MenuItem value="Cali">Cali</MenuItem>
                            <MenuItem value="Buenaventura">Buenaventura</MenuItem>
                            <MenuItem value="Pereira">Pereira</MenuItem>
                            <MenuItem value="Cali">Cali</MenuItem>
                            <MenuItem value="Cali">Cali</MenuItem>
                            <MenuItem value="Cali">Cali</MenuItem>
                            <MenuItem value="Cali">Cali</MenuItem>
                            <MenuItem value="Cali">Cali</MenuItem>
                            <MenuItem value="Cali">Cali</MenuItem>
                            <MenuItem value="Cali">Cali</MenuItem>
                        </Select>
                    </form>
                    <Button className="boton" variant="contained" color="primary">
                        registrarse
                        </Button>
                </div>
            </div>
        );

    };
};

export default Registro;