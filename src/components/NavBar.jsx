import React from 'react';
import Logo from '../img/globo.png'
import Menu from '../img/menu.png'
import Lista from './Lista';
import Nav from './Nav';
import './scss/NavBar.scss'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

export class NavBar extends React.Component {
    render() {
        return (
            <div>
                  <Nav></Nav>

                  <p></p>
            </div>
        )
    }
}

export default NavBar
