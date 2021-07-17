import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Categoria from './Categoria'

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
        <Categoria></Categoria>
        <TextField
          id="outlined-full-width"
          label="Nombre"
          style={{ margin: 8 }}
          placeholder="Nombre del paquete"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Nombre de la empresa"
          style={{ margin: 8 }}
          placeholder="Ingresa el nombre de la empresa"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Precio"
          style={{ margin: 8 }}
          placeholder="Ingresa el precio por persona/noche"
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
          label="Cantidad de días"
          style={{ margin: 8 }}
          placeholder="Ingresa la duracion del paquete"
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
          placeholder="Ingresa el destino del paquete"
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