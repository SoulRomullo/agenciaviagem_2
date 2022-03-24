import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const Cupom = () => {
    return (
        <form class="container form_body">
            <h2 className='pt-4'>Cadastrar Cupom</h2>
            
            <Form.Group className="container mb-5 col-sm-5" controlId="formulario">
                <Form.Label className="mb-2"><b>CPF</b></Form.Label>
                <Form.Control className="mb-2" type="text" placeholder="Insira o CPF" />
                
                
            </Form.Group>

            <hr/>

            <Link className="btn btn-success mb-5 mt-5 btnSalvar" to="#">Buscar</Link>
            
        </form>
    );
}

export default Cupom;