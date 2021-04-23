import React from 'react';
import reactDOM from 'react-dom';
import './index.css';
import SlideDestinos from './components/SlideDestinos';
import NavBar from './components/NavBar';
import Nav from './components/Nav';
import Home from './pages/Home';

const container =  document.getElementById('app');

reactDOM.render(< Home />,container);