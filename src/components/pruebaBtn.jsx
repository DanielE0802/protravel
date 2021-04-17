import React from 'react';
import Logo from '../img/globo.png'
import Menu from '../img/menu.png'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './theme/themeconfig'

class Nav extends React.Component{
  
    render(){
        return(
            <div>
            <ThemeProvider theme={theme}>
                <Button color="primary" variant="contained">
                    User
                </Button>
                <br></br> <br></br>
                <Button color="primary" variant="contained" >
                    Google
                </Button>

                <Button fullWidth color="primary" variant="contained" href="https://google.com">
                    Fullwigth href
                </Button>
                
                <Button size="large" color="primary" variant="contained" >
                    Size
                </Button>

                <Button size="large" color="primary" variant="contained" endIcon= {<DeleteIcon/>} >
                    Eliminar
                </Button>

                <IconButton aria-label="">
                  <DeleteIcon/>
                </IconButton>

                <Typography variant="body1" color="secondary" align="center" gutterBottom="true" >
                    Hola guapo
                </Typography>

                <Button variant="text" color="default">
                  yess
                </Button>
                </ThemeProvider>
            </div>
        
        );
            
    };
};

export default Nav;