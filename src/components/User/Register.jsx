import React from "react";
import {
  Typography,
  Grid,
  Paper,
  TextField,
  CssBaseline,
  Button,
  Avatar,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import "../scss/register.scss";
import Back from "./Back";
import Select from "../Select";
import Swal from "sweetalert2"
import { useHistory } from 'react-router';



const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://i.pinimg.com/originals/bb/e3/47/bbe347e350c0d3975d68ad52a641575f.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  let history = useHistory();

  // let getData= getDatas();

  return (
    <Grid
      container
      component="main"
      className={classes.root}
      style={{ padding: "0px" }}
    >
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Back />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrate
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nameRegister"
              label="Nombre"
              name="name"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="surnameRegister"
              label="Apellido"
              name="surname"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nicknameRegister"
              label="Nombre de Usuario"
              name="nickname"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="emailRegister"
              label="Correo Electronico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="passwordRegister"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirm_password"
              label="Confirmar contraseña"
              type="password"
              id="confirm_passwordRegister"
              autoComplete="current-password"
            />
            <div className="select">
              <Select />
            </div>
            <br />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              id="confirmRegisterRegister"
              className={classes.submit}
              onClick={() => {
                let user = document.getElementById("nameRegister").value;
                let nick = document.getElementById("nicknameRegister").value;
                let surname = document.getElementById("surnameRegister").value;
                let email = document.getElementById("emailRegister").value;
                let password =
                  document.getElementById("passwordRegister").value;


                let peticion = [user, nick, surname, email, password];

                let objPeticion = {
                  name: peticion[0],
                  nick: peticion[1],
                  surname: peticion[2],
                  email: peticion[3],
                  password: peticion[4],
                };

                async function subirDatos() {
                  const res = await fetch(
                    "http://localhost:3001/api/user/register",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(objPeticion),
                      redirect: "follow",
                    }
                  );
                  const response = await res.json();
                  console.log(response.user)
                  if (response.user === undefined){
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: response.message,
}
)
                    
                  }
                  else{
                    Swal.fire({
                        position: 'bottom-start',
                        icon: 'success',
                        title: "Usuario creado correctamente",
                        showConfirmButton: false,
                        timer: 4500


                      })
                      setTimeout(()=>{
                        history.push("/login")
                      },2000)
             

                  }
                  ;
                }
                subirDatos();
              }}
            >
              Registrate
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
