const React = require('react');
import { Button, InputGroup, FormControl,Container,Col } from 'react-bootstrap';


//const logofooter = require('../imgs/login.jpg');

// const myImg = '../imgs/login.jpg';


class App extends React.Component {

  
    constructor(props){
        super(props);
        
        this.state = {
          username : '',
          password:''
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
        console.log('Your input value is: ' + this.state.username+' pasword: '+this.state.password)
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
                        
                        <input type="text" id="password" onChange={this.updatepassword}></input>
                    </InputGroup.Prepend>
               
                </InputGroup>
                
                <Button type="submit" onClick={this.handleSubmit}  variant="dark">Registrarse</Button>
                </Col>   
                </Container>
            </div>
        )
    }
}

export default App
