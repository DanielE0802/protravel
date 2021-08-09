import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Servicios from '../VistaNativo/Servicios'
import Imagenes from './Image';

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
  function createHotel(){
    let hotelName = (document.getElementById("nameHotel")).value
    let hotelDescripcion = (document.getElementById("descripcionHotel")).value
    let hotelUbi = (document.getElementById("ubicacionHotel")).value

    let peticion = [hotelName, hotelDescripcion,hotelUbi];

    let objPeticion = {
      nombre: peticion[0],
      descripcion: peticion[1],
      ubicacion:peticion[2]
    }

    
    function subirDatos() {
      const updateLogin= async () =>{
        let response = await fetch(
        "http://localhost:3001/api/hotel/registrar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(objPeticion),
          redirect: "follow",
        }
    
        )
        console.log(JSON.stringify(objPeticion))
        let data = await response.json()
        console.log(data)
        return data
      }
      let info = updateLogin()
      info.then(resp => {
        console.log(resp)
      })
    }

    


    subirDatos();    
    console.log(objPeticion)
  }
  

  return (
    <div className={classes.root}>
      <div>
      <Imagenes></Imagenes>
      <h1>Informacion</h1>
        <TextField
          label="Nombre del hotel"
          style={{ margin: 8 }}
          placeholder="Ingresa el nombre del hotel"
          fullWidth
          margin="normal"
          id="nameHotel"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="descripcionHotel"
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
          id="ubicacionHotel"
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

        <Button variant="outlined" color="primary" style={{margin: 'auto', display: 'block'}}
        onClick={createHotel}
        >
        Crear
        </Button>
      </div>
    </div>
  );
}