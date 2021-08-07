import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Servicios from '../VistaNativo/Servicios'
import Imagenes from './Image';
import Imagenes2 from './imagen2';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Imagenes></Imagenes>
        <h1>Informacion</h1>
        <TextField
          id="outlined-full-width"
          label="Nombre del hotel"
          style={{ margin: 8 }}
          placeholder="Ingresa el nombre del hotel"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Descripción"
          style={{ margin: 8 }}
          placeholder="Ingresa una descripcion"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Ubicación"
          style={{ margin: 8 }}
          placeholder="Ingresa la ubicacion del hotel"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Precio por noche"
          style={{ margin: 8 }}
          placeholder="Ingresa el precio por noche"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <Servicios></Servicios>

        <Button variant="outlined" color="primary" style={{ margin: 'auto', display: 'block' }}>
          Crear
        </Button>
      </div>
    </div>
  );
}