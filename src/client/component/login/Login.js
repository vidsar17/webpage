const React = require('react');
import { Button, InputGroup, FormControl,Container,Col } from 'react-bootstrap';

import {functionnode} from '../../../login/loginserver';

//const logofooter = require('../imgs/login.jpg');

// const myImg = '../imgs/login.jpg';


class App extends React.Component {  
    constructor(props){
        super(props);
        
        this.state = {
        username : '',
        password:'',
          usuario:''
        }
        
        this.updateusername = this.updateusername.bind(this);
        this.updatepassword = this.updatepassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }

        updateusername(event){
        this.setState({username : event.target.value})
        }
        updatepassword(event){
            this.setState({password : event.target.value})
            }
    
        handleSubmit(){
            //mandar a node 
            //console.log('Your input value is: ' + this.state.username+' pasword: '+this.state.password)
            var dato= this.state.username + ',' + this.state.password;
            const data = { 
                user: this.state.username,
                pass: this.state.password
            }

            console.log(data);
            
            fetch(`/getUser${dato}`)
            .then(res => res.json())
            .then(usernode => this.setState({ usernode })) 
            
        
            //Send state to the server code
        }

    render() {
        
        return (
            <div>
                <Container>
                  

                <Col md={6}>

               {/* <img src={require(`${myImg}`)} /> */}
                                 
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <label>Usuario</label>
                        <input type="text" id="username" onChange={this.updateusername}></input>
                    </InputGroup.Prepend>
               
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <label>Clave</label>
                        <div classname="fondo">
                            <Container>
                                <input type="text" id="password" onChange={this.updatepassword}></input>
                            </Container>
                        </div>

                    </InputGroup.Prepend>
               
                </InputGroup>
                
                <Button type="submit" onClick={this.handleSubmit}  variant="dark">Inicio</Button>
                </Col>   
                </Container>
            </div>
        )
    }
}

export default App
