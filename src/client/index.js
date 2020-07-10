import React from 'react';
import { render } from 'react-dom';
//import './style/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from  './component/login/Login';

const App = () => {
    return <Login></Login>
}

render(
    <App/>,
    document.getElementById('app')
);


