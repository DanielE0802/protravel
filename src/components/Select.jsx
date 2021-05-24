import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [tipoCuenta, setTipoCuenta] = React.useState('');
  const [residencia, setResidencia] = React.useState('');

  const cambiarCuenta = (event) => {
    setTipoCuenta(event.target.value);
  };

  const cambiarResidencia = (event) => {
    setResidencia(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Cuenta</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={tipoCuenta}
          onChange={cambiarCuenta}
          label="Cuenta"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Turista</MenuItem>
          <MenuItem value={20}>Nativo</MenuItem>
          <MenuItem value={30}>Persona natural</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Residencia</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={residencia}
          onChange={cambiarResidencia}
          label="Residencia"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Cali</MenuItem>
          <MenuItem value={2}>Cali</MenuItem>
          <MenuItem value={3}>Cali</MenuItem>
          <MenuItem value={4}>Cali</MenuItem>
          <MenuItem value={5}>Cali</MenuItem>
          <MenuItem value={6}>Cali</MenuItem>
          <MenuItem value={7}>Cali</MenuItem>
          <MenuItem value={8}>Cali</MenuItem>
          <MenuItem value={9}>Cali</MenuItem>
          <MenuItem value={10}>Cali</MenuItem>
          <MenuItem value={11}>Cali</MenuItem>
          <MenuItem value={12}>Cali</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}