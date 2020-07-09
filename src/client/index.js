import React from 'react';
import { render } from 'react-dom';
import './style/main.css';

const App = () => {
    return <h1>Es un buen comienzo para el nuevo e-Ludum!!</h1>
}
render(
    <App/>,
    document.getElementById('app')
);