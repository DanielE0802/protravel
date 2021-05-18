import React from 'react';


import confLogo   from '../img/globo.png';
import confLogo2  from '../img/Img1.jpg';

import './scss/home.css'


class NavBar extends React.Component{
    render(){
        return(
            <div>
                <div>

                           <div>
                              <img src={confLogo} alt=" logo de referencia"/>  
                             </div>

                              <header>    
                                   <h1>ProTravel</h1>
                    
                                </header>

                              <h1>ProTravel</h1>
                                   <ul>
                                        <li>Home</li>
                                        <li>Blogs</li>
                                        <li>Contacto</li>
                                   </ul>
                <div>

                           <section>

                           <a href="https://placeholder.com/" target="_blank">
                           <img src={confLogo2}alt="imagen de muestra"/></a>

                           <a href="https://placeholder.com/" target="_blank">
                           <img src={confLogo} alt="imagen de muestra"/></a>

                           <a href="https://placeholder.com/" target="_blank">
                           <img src={confLogo2}alt="imagen de muestra"/></a>

                           <a href="https://placeholder.com/" target="_blank">
                           <img src={confLogo} alt="imagen de muestra"/></a>

                           <a href="https://placeholder.com/" target="_blank">
                           <img src="https://via.placeholder.com/150" alt="imagen de muestra"/></a>

                           </section>   
            </div>

                </div>
            </div>
        );
            
    }
}

export default NavBar;