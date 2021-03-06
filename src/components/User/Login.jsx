
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from "../theme/themeconfig";
import '../scss/user.scss';
import { ThemeProvider } from "@material-ui/core/styles";
import Back from './Back';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://i.pinimg.com/originals/bb/e3/47/bbe347e350c0d3975d68ad52a641575f.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide(props) {

  console.log(props.name)
  const classes = useStyles();

  let history = useHistory();

  // const [name, setName] = useState("")
  // const [nickname, setNickname] = useState("")
  // const [lastName, setLastName] = useState("")
  // const [email, setEmail] = useState("")

  return (

    <ThemeProvider theme={theme}>
    <Grid container component="main" className={classes.root} style={{padding:"0px"}} >
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Back/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ingresar
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="emailLogin"
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
              label="Contrase??a"
              type="password"
              id="passwordLogin"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuerdame"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{background:"linear-gradient(280deg, #0dc5e7 10%, #089fed 40%, #068fef 65%, #0172f3 88%) !important;"}}
              id="dataUser"
              onClick={() => {
                let email = document.getElementById("emailLogin").value;
                let password = 
                  document.getElementById("passwordLogin").value;

                let peticion = [email, password];

                let objPeticion = {
                  email: peticion[0],
                  password: peticion[1],
                };

                function subirDatos() {
                  const updateLogin= async () =>{
                    let response = await fetch(
                    "http://localhost:3001/api/user/login",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(objPeticion),
                      redirect: "follow",
                    })
                    let data = await response.json()
                    return data
                  }

                  let info = updateLogin()
                  info.then(resp => {
                    console.log(resp.user)
                  let dataUser = document.getElementById("dataUser")

                    
                    if(resp.user === undefined){
                      Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Ingresa correctamente tus credenciales',
}
)
                    }
                    else{
                      Swal.fire({
                        position: 'bottom-start',
                        icon: 'success',
                        title: `Bienvenido ${resp.user.name}`,
                        showConfirmButton: false,
                        timer: 4500


                      })

                      // dataUser.setAttribute("iduser", resp.user._id)
                    dataUser.setAttribute("name", resp.user.name)
                    dataUser.setAttribute("email", resp.user.email)
                    dataUser.setAttribute("nick", resp.user.nick)
                    dataUser.setAttribute("surname", resp.user.surname)
                    dataUser.setAttribute("image", resp.user.image)
                    dataUser.setAttribute("login", true)
                    localStorage.setItem("login", "true")
                    setTimeout(()=>{
                      history.push("/")
                    },
                    3000)
                  
                    
                    }

                  })
                  // console.log(email)
                  // console.log(name)
                  // console.log(nickname)
                  // console.log(lastName)
                }
                subirDatos();
                
              }}

              tabIndex="0"
            >
              Ingresar
            </Button>
            <Grid container>

            
              <Grid item xs>
                <Link href="/contrase??a" variant="body2">
                  ??Olvidaste tu contrase??a?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"??No tienes cuenta? Registrate"}
                </Link>
              </Grid>

            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}