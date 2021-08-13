import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
      <div>
    <h1>Servicios</h1>
    <FormGroup row>
      <FormControlLabel
        
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" color="primary"/>}
        label="Wifi"
      />
      <FormControlLabel
        control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary"/>}
        label="Parquedero"
      />
      <FormControlLabel
        control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" color="primary"/>}
        label="Se permite mascotas"
      />
      <FormControlLabel
        control={<Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD" color="primary"/>}
        label="Pscina"
      />
      <FormControlLabel
        control={<Checkbox checked={state.checkedE} onChange={handleChange} name="checkedE" color="primary"/>}
        label="Restaurante"
      />
      <FormControlLabel
        control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF" color="primary"/>}
        label="Cocina"
      />
    </FormGroup>
      </div>
    
  );
}