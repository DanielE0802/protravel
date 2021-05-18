import React from 'react';
import {
    makeStyles
} from '@material-ui/core'
import NavBar from './Plantilla';
import './theme/themeconfig'
const estilos= makeStyles (theme=>({
    root:{
        display:'flex'
    }
}))


class Contenedor extends React.Component{
    render(){
        return(
            <div>
                <NavBar></NavBar>
              <p>HOLA! HOME</p>
            </div>
        );
            
    };
};

export default Contenedor;