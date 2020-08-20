    import React from 'react';
import { render } from 'react-dom';
import { Button, InputGroup, FormControl, Container, Col, Nav } from 'react-bootstrap';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link 
} from "react-router-dom";
import Login from './component/login/Login';
import Registro from './component/registro/Registro';
import Juego from './component/juego/juego';
import UserDelete from './component/userDelete/userDelete';
import request from 'superagent';
import { ModalBody } from 'reactstrap';


//function App() {
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to="/Login">
                            Login
                        </Link>
                        <Link to="/Registro">
                            Registro
                        </Link>
                        <Link to="/juego">
                            Juego
                        </Link>
                        <Link to="/Eliminar">
                            Eliminar
                        </Link>
                    </div>
                    <hr/> 
                    <Switch>
                        <Route path="/Login">
                            <Login/>
                        </Route>
                        <Route path="/Registro">
                            <Registro/>
                        </Route>
                        <Route path="/juego">
                            <Juego/>
                        </Route>
                        <Route path="/Eliminar">
                            <UserDelete/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App

