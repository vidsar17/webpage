import React from 'react';
import { render } from 'react-dom';
//import './style/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from  './component/login/Login';

const App = () => {
    return <Login></Login>
    //return <h1>Este es un buen comienzo para el nuevo e-Ludum!!</h1>
}

render(
    <App/>,
    document.getElementById('app')
);


