"use client"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css'
import { useState } from 'react';


function TextControlsExample() {
    const [terminosAccept, setTerminosAccept] = useState(true)
    return (
        <div className='containerForm'>
            <Form className='Form' >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Select id='Asunto' aria-label="Default select example">
                        <option >Seleccionar asunto</option>
                        <option value="1">Reclamos</option>
                        <option value="2">Informacion</option>
                        <option value="3">Consultas</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <div className='checkForm'>
                    <Form.Check 
                        type={'checkbox'}
                        id={`default-{checkbox}`}
                        label={`Aceptar terminos y condiciones`}
                    />
                </div>
                <Button 
                    variant="outline-dark"
                    type='reset'
                >
                        Enviar
                </Button>

            </Form> 
        </div>
);
}

export default TextControlsExample;