import React from 'react';
import '.././scss/register.css';
import Imagen1 from '../../img/LoginIMG.jpg';
import { Button, TextField, Select, InputLabel, MenuItem, Grid } from '@material-ui/core';
import Back from '../Back';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));



export default function Registro() {
    const classes = useStyles();
    const [ciudad, setCiudad] = React.useState('');
    const [cuenta, setCuenta] = React.useState('');

    const handleChangeCuenta = (event) => {
        setCuenta(event.target.value);
    };

    const handleChange = (event) => {
        setCiudad(event.target.value);
    };
    return (
        <Grid container className="contenedor">
            <Grid item xs={0} md={5}>
                <img className="imagen" src={Imagen1} alt="" />
            </Grid>
           
            <Grid className="texto" item xs={12} md={7}>
            <Grid style={{transform: "translate(-300px, 10px)"}}>
            <Back  />
            </Grid>
            
                <form>
                    <h2>Registrate</h2>
                    <h4>Es fácil y rápido</h4>
                    <h4 className="TextoInput">Nombre completo</h4>
                    <TextField
                        label="Ingrese su nombre"
                        color="primary"
                        className="nombre TextField"
                        variant="outlined"
                        size="small"
                    />
                    <h4 className="TextoInput">Correo electrónico</h4>
                    <TextField
                        label="Ingrese su correo electronico"
                        color="primary"
                        className="correo TextField"
                        variant="outlined"
                        type="email"
                        size="small"
                    />
                    <h4 className="TextoInput">Contraseña</h4>
                    <TextField
                        label="Ingrese su contraseña"
                        color="primary"
                        className="contraseña TextField"
                        type="password"
                        variant="outlined"
                        size="small"
                    />
                    <br/>
                    <TextField
                        style={{ marginTop: "7px", marginBottom: "15px" }}
                        label="Confirme su contraseña"
                        color="primary"
                        className="confirmar TextField"
                        type="password"
                        variant="outlined"
                        size="small"
                    />
                    <div className="SelectContainer">
                    <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Tipo de cuenta</InputLabel>
                            <Select  style={{width:"10vw", minWidth:"150px", maxWidth:"200px"}}
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                onChange={handleChangeCuenta}
                                value={cuenta}
                                label="Tipo de cuenta"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Turista</MenuItem>
                                <MenuItem value={20}>Nativo</MenuItem>
                                <MenuItem value={30}>Persona natural</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined"  className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Ciudad</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                onChange={handleChange}
                                value={ciudad}
                                label="Ciudad"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Cali</MenuItem>
                                <MenuItem value={20}>Palmira</MenuItem>
                                <MenuItem value={30}>Buenaventura</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </form>
                <Button className="boton" variant="contained" color="primary">
                    registrarse
                        </Button>

            </Grid>

        </Grid>
    );

};

// export default Registro;