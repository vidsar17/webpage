import React from 'react';
//import {Modal, ModalHeader, ModalBody} from 'react-modal';
import {Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';
import { Button, InputGroup, FormControl,Container,Col } from 'react-bootstrap';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            firstName : '',
            lastName: '',
            dateBirth: '',
            pass: '',
            mail: '',
            code: '',
            openModal: false
        }

        //contenedores
        this.upDateFirstName = this.upDateFirstName.bind(this);
        this.upDateLastName =  this.upDateLastName.bind(this);
        this.upDateDateBirth = this.upDateDateBirth.bind(this);
        this.upDatePass = this.upDatePass.bind(this); 
        this.upDateMail = this.upDateMail.bind(this);
        this.upDateCode = this.upDateCode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    upDateCode(event){
        this.setState({code: event.target.value})
    }

    //Close modal
    closeModal(){
        this.setState({openModal: !this.state.openModal});
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
            
            let res = fetch('http://localhost:3301/sendMail', config);
            let json = res.json(); 

        } catch (error){
            if(error){console.log(`Error: ${error}`)}
        }
    }
    //Click del boton:
    handleSubmit(){

        //data for backend
        let newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dateBirth: this.state.dateBirth,
            pass: this.state.pass,
            //mail: this.state.mail,
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
            
            let res = fetch('http://localhost:3301/setNewUser', config);
            let json = res.json();

        } catch (error){
            if(error){console.log(`Error: ${error}`)}
        }
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
                                <Button type="submit" variant="dark" onClick={this.handleSubmit}>Enviar</Button>
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
