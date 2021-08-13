import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
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

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      
      <FormControl variant="outlined" className={classes.formControl} style={{display: 'flex', justifyContent:'center'}}>
        <InputLabel htmlFor="outlined-age-native-simple">Categoria</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Categoria"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Vuelo y alojamiento</option>
          <option value={20}>Alojamiento</option>
          <option value={30}>Alojamiento y transporte</option>
          <option value={40}>Actividades</option>
        </Select>
      </FormControl>
    </div>
  );
}