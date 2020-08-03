    import React from 'react';
import { render } from 'react-dom';
import { Button, InputGroup, FormControl, Container, Col, Nav } from 'react-bootstrap';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link 
} from "react-router-dom";
import Login from './component/login/Login'
import Registro from './component/registro/registro'
import Juego from './component/juego/juego'
import ReactGame from './component/reactGame/reactGame'


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
                        <Link to="/registro">
                            Registro
                        </Link>
                        <Link to="/juego">
                            Juego
                        </Link>
                        <Link to="/reactGame">
                            reactGame
                        </Link>
                    </div>
                    <hr/> 
                    <Switch>
                        <Route path="/Login">
                            <Login/>
                        </Route>
                        <Route path="/registro">
                            <Registro/>
                        </Route>
                        <Route path="/juego">
                            <Juego/>
                        </Route>
                        <Route path="/reactGame">
                            <ReactGame/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App