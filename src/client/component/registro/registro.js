import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';
import { Button, InputGroup, FormControl,Container,Col } from 'react-bootstrap';
import request from 'superagent';
import { useState } from 'react';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            firstName : '',
            lastName: '',
            dateBirth: '',
            pass: '',
            mail: '',
            rol: '',
            code: '',
            openModal: false
        }

        //Enviar mensaje al registrarse_
        this.message = this.message.bind(this);        //contenedores
        this.upDateFirstName = this.upDateFirstName.bind(this);
        this.upDateLastName =  this.upDateLastName.bind(this);
        this.upDateDateBirth = this.upDateDateBirth.bind(this);
        this.upDatePass = this.upDatePass.bind(this); 
        this.upDateMail = this.upDateMail.bind(this);
        this.upDateRol = this.upDateRol.bind(this);
        this.upDateCode = this.upDateCode.bind(this);
        this.handleSubmitReg = this.handleSubmitReg.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        

        //const [modalIsOpen, setModalIsOpen] = useState(false);
    }

    //Implementacion del metodos:
    upDateFirstName(event){
        this.setState({firstName: event.target.value});
    }

    upDateLastName(event){
        this.setState({lastName: event.target.value});
    }

    upDateDateBirth(event){
        this.setState({dateBirth: event.target.value});
    }

    upDatePass(event){
        this.setState({pass: event.target.value});
    }

    upDateMail(event){
        this.setState({mail: event.target.value});
    }

    upDateRol(event){
        this.setState({rol: event.target.value});
    }

    upDateCode(event){
        this.setState({code: event.target.value})
    }

    //Close modal
    closeModal(){
        this.setState({openModal: !this.state.openModal});

        if(this.message == 'Error'){ alert('El usuario ya existe!') };
        if(this.message == 'Ok'){ alert('BIENVENIDO A e-Ludum. Usuario registrado') };
        if(this.message == 'Cod error'){ alert('Codigo incorrecto') };
    }

    //open modal and mail
    openModal(){
        this.setState({openModal: !this.state.openModal});

        let flagMail = { mail: this.state.mail};

        try{
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(flagMail)
            }

            fetch('http://localhost:3301/sendMail', config)
                .then(res => res.json())
                .then((data) => {
                    if (data) { console.log('mail enviado'); }
            });

        } catch (error){
            if(error){console.log(`Error: ${error}`)}
        }
    }
    //Click del boton:
    handleSubmitReg(){
        //data for backend
        let newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dateBirth: this.state.dateBirth,
            pass: this.state.pass,
            rol: this.state.rol,
            code: this.state.code
        }
       
        try{

            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(newUser)
            }
            
            fetch('http://localhost:3301/setNewUser', config)
                .then(res => res.json())
                .then((data) => {
                this.message = data[0].error;
                /*
                if(data[0].error == 'Error'){ alert('El usuario ya existe!') };
                if(data[0].error == 'Ok'){ alert('BIENVENIDO A e-Ludum. Usuario registrado') };
                if(data[0].error == 'Cod error'){ alert('Codigo incorrecto') };*/
                console.log('el registro es: ', data[0].error); 
            });

        } catch (error){
            if(error){console.log(`Error: ${error}`)}
        }
    }
    
    //pedirle datos al back:
    componentDidMount(){
        request
            .get('http://localhost:3301/getRol')
            .end(function (err, res){
                if(err){
                    console.log('Desde registro: ', err);
                } else {
                    console.log('Desde registro: ', res.body);
                }
            });
    }
    
    render() {
        return (
            
            <div>
                
                <Container>
                    <Col md={6}>
                    {/* <img src={require(`${myImg}`)} /> */}
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <label>Nombre </label>
                            <input type="text" id="nombre" onChange={this.upDateFirstName}></input>
                        </InputGroup.Prepend>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <label>Apellido </label>    
                            <input type="text" id="apellido" onChange={this.upDateLastName}></input>
                        </InputGroup.Prepend>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <label>Fecha de nacimiento </label>    
                            <input type="date" id="nacimiento" onChange={this.upDateDateBirth}></input>
                        </InputGroup.Prepend>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <label>Clave </label>    
                            <input type="password" id="pass" onChange={this.upDatePass}></input>
                        </InputGroup.Prepend>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <label>Correo </label>    
                            <input type="email" id="mail" onChange={this.upDateMail}></input>
                        </InputGroup.Prepend>
                    </InputGroup>
                    <label htmlFor="roles">Rol de usuario</label>
                    <select id="roles" name="rol" onClickCapture={this.upDateRol}>
                        <option id="0" value="">Seleccionar Rol</option>
                        <option id="1" value="Orquestador">Orquestador</option>
                        <option id="2" value="Tutor">Tutor</option>
                        <option id="3" value="Jugador">Jugador</option>
                    </select>
                    
                    <Button type="submit" variant="dark" onClick={this.openModal}>Registrarse</Button>
                    </Col>   

                    <div>
                        <Modal isOpen={this.state.openModal}>
                            <ModalHeader>
                                <h3>Se envio un código al correo ingresado. Ingreselo y presione enviar. Gracias!</h3>
                            </ModalHeader>
                            <ModalBody>
                                <input type="text" id="cod" onChange={this.upDateCode}></input>
                            </ModalBody>
                            <ModalFooter>
                                <Button type="submit" variant="dark" onClick={this.handleSubmitReg}>Enviar</Button>
                                <Button type="submit" variant="dark" onClick={this.closeModal}>Cerrar</Button>
                            </ModalFooter> 
                        </Modal>
                    </div>

                </Container>
               
            </div>
        )
    }
}

export default App
