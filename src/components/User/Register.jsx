import React from 'react';
import { MenuItem, Select, InputLabel, Typography, Grid, Box, Paper, Link, Checkbox, FormControlLabel, TextField, CssBaseline, Button, Avatar } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import '../scss/register.css';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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

export default function SignInSide() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
          </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoFocus
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
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
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="confirm_password"
                            label="Confirm password"
                            type="password"
                            id="confirm_password"
                            autoComplete="current-password"
                        />
                        <div className="selectores">
                            <div>
                                <InputLabel className="inputlabel" id="label">Tipo de cuenta</InputLabel>
                                <Select labelId="label" id="select">
                                    <MenuItem value="Nativo">Nativo</MenuItem>
                                    <MenuItem value="Persona Natural">Persona natural</MenuItem>
                                    <MenuItem value="Turista">Turista</MenuItem>
                                </Select>
                            </div>
                            <div>
                                <InputLabel className="inputlabel inputlabel2" id="label">Ciudad de residencia</InputLabel>
                                <Select className="select2" labelId="label" id="select">
                                    <MenuItem value="Cali">Cali</MenuItem>
                                    <MenuItem value="Buenaventura">Buenaventura</MenuItem>
                                    <MenuItem value="Pereira">Pereira</MenuItem>
                                    <MenuItem value="Cali">Cali</MenuItem>
                                    <MenuItem value="Cali">Cali</MenuItem>
                                    <MenuItem value="Cali">Cali</MenuItem>
                                    <MenuItem value="Cali">Cali</MenuItem>
                                    <MenuItem value="Cali">Cali</MenuItem>
                                    <MenuItem value="Cali">Cali</MenuItem>
                                    <MenuItem value="Cali">Cali</MenuItem>
                                </Select>
                            </div>
                        </div>
                        <br />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
            </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}