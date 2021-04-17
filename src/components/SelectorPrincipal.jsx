import React from 'react';

import './scss/home.css'

class NavBar extends React.Component{
    render(){
        return(
            <div>
                <div>

                <h1>ProTravel</h1>
                <ul>
                    <li>Home</li>
                    <li>Blogs</li>
                    <li>Contacto</li>
                </ul>


                </div>
            </div>
        );
            
    };
};

export default NavBar;