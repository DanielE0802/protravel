import React from 'react';
import TextField from '@material-ui/core/TextField';

import imagen1   from '../img/globo.png';
import imagen2  from '../img/Img1.jpg';
import imagen3  from '../img/img2.jpg';
import imagen4  from '../img/img4.jpg';
import imagen5  from '../img/img5.jpg';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './scss/home.css'



class NavBar extends React.Component{
    render(){
        return(
            <div>
                <header>    
                   <h1>ProTravel</h1>   
                 </header>

                 <br />
                 <br />

                 <div>
                     <form>
                     <h4 className="TextoInput">Buscador</h4>
                        <TextField
                            label="Ingrese su busqueda"
                            color="primary"
                            className="InputMaterial correo"
                            variant="outlined"
                            type="string"
                        />
                     </form>
                 </div>

                 <br />
                 <br />

                 <section  >

                   <a  href="https://www.acamica.com/" target="">
                   <img src={imagen1}alt="imagen de muestra"/></a>

                   <a href="https://www.google.com/" target="">
                   <img src={imagen2} alt="imagen de muestra"/></a>

                   <a href="https://www.google.com" target="">
                   <img src={imagen3}alt="imagen de muestra"/></a>

                   <a href="https://placeholder.com/" target="">
                   <img src={imagen4} alt="imagen de muestra"/></a>

                   <a href="https://placeholder.com/" target="">
                   <img src={imagen5} alt="imagen de muestra"/></a>

                </section>

                <br />
                <br />

                
                <footer>
                   <p>Footer</p>

                   <div>
                    <FacebookIcon></FacebookIcon>
                    <InstagramIcon></InstagramIcon>
                    <YouTubeIcon></YouTubeIcon>
                   </div>

                </footer>


            </div>

        
        );

            
    }
}

export default NavBar;