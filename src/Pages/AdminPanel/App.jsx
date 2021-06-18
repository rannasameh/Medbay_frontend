import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import {BrowserRouter as Router} from 'react-router-dom';


export default function App()
{
    return(
        <div>
        <Router>
            <div>
                <Routes />
            </div>
        </Router>
        </div>
    )
}