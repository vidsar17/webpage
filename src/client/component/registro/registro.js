const React = require('react');
import { Button, InputGroup, FormControl,Container,Col } from 'react-bootstrap';

class App extends React.Component {

    constructor(props){
        super(props);
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
                            <input type="text" id="nombre"></input>
                        </InputGroup.Prepend>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <label>Apellido </label>    
                            <input type="text" id="apellido"></input>
                        </InputGroup.Prepend>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <label>Fecha de nacimiento </label>    
                            <input type="text" id="nacimiento"></input>
                        </InputGroup.Prepend>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <label>Clave </label>    
                            <input type="text" id="pass"></input>
                        </InputGroup.Prepend>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <label>Correo </label>    
                            <input type="text" id="mail"></input>
                        </InputGroup.Prepend>
                    </InputGroup>
                    
                    <Button type="submit" variant="dark">Registrarse</Button>
                    </Col>   
                </Container>
            </div>
        )
    }
}

export default App
