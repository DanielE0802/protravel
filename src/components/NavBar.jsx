import React from 'react';
import Logo from '../img/globo.png'
import Menu from '../img/menu.png'
import Lista from './Lista';
import Nav from './Nav';
import './scss/NavBar.scss'

class NavBar extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <Lista/>
            </div>
        );
            
    }
}

export default NavBar;