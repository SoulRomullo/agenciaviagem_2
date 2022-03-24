import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const Cadastrar = () => {
    return (
        <form class="container form_body">
            <h2 className='pt-4'>Pessoas</h2>
            <p class="txtAdicionar">Adicionar Pessoa</p>

            <Form.Group className="container mb-5 col-sm-5" controlId="formulario">
                <Form.Label className="mb-2"><b>Nome</b></Form.Label>
                <Form.Control className="mb-2" type="text" placeholder="Insira seu Nome" />
                <Form.Label className="mb-2"><b>CPF</b></Form.Label>
                <Form.Control className="mb-2" type="text" placeholder="Informe seu CPF" />
                <Form.Label className="mb-2"><b>Endereço</b></Form.Label>
                <Form.Control className="mb-2" type="text"/>
                <Form.Label className="mb-2"><b>Telefone</b></Form.Label>
                <Form.Control type="text"/>
                
            </Form.Group>

            <hr/>

            <Link className="btn btn-success mb-5 mt-5 btnSalvar" to="/">Salvar</Link>
            
        </form>
    );
}

export default Cadastrar;