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
import ReactGame from './component/reactGame/reactGame';
import request from 'superagent';
import { ModalBody } from 'reactstrap';


//function App() {
class App extends React.Component {
    constructor(props) {
        super(props);
        const flag = '';
    }

    componentDidMount(){
        request
            .post('http://localhost:3301/setNewUser')
            .end(function (err, res){
                if(err){
                    console.log('viene: ', err);
                } else {
                    console.log('viene: ', res.body[0].user);
                    flag =  res.body[0].user;
                }
            });
    }

    myAlert(){
        alert(flag);
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
                        <Link to="/reactGame">
                            reactGame
                        </Link>
                    </div>
                    <hr/> 
                    <Switch>
                        <Route path="/Login">
                            <Login/>
                        </Route>
                        <Route path="/Registro">
                            <Registro/>
                            this.myAlert();
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