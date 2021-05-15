import React from 'react';
import reactDOM from 'react-dom';
import './index.css';
import Home from  './components/Home';
import Login from  './components/Login';
import Register from  './components/Register';
import Destinos from  './components/Destinos';

const container =  document.getElementById('app');

reactDOM.render(< Login />,container);