import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './components/User/Login'
import Registro from './components/User/Register'

function App() {
    return (
        <div>
            <BrowserRouter>
                <switch>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Registro} />
                </switch>

            </BrowserRouter>
        </div>
    )
}

export default App
