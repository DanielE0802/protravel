import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      <h1>Informacion</h1>

        <TextField
          id="outlined-full-width"
          label="Nombre del restaurante"
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
          placeholder="Ingresa la ubicacion del restaurante"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Platillos"
          style={{ margin: 8 }}
          placeholder="Ingresa el nombre del platillo y el precio"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Menú"
          style={{ margin: 8 }}
          placeholder="Si cuenta con una URL ingresela"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <Button variant="outlined" color="primary" style={{margin: 'auto', display: 'block'}}>
        Crear
        </Button>
      </div>
    </div>
  );
}