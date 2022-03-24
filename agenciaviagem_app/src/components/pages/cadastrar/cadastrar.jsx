import React, { Component } from 'react'
import './style.css'
import { Form } from 'react-bootstrap'

class CreateUsuarioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
        }

    }
    
    render() {
        return (
            <div className='container form_body'>
                <h2 className='pt-4'>Pessoas</h2>
                <p className='txtAdicionar'>Cadastro</p>

                <Form.Group className='container mb-5 col-sm-5' controlId='formulario'>
                    <Form.Label className='mb-2'><b>Nome</b></Form.Label>
                    <Form.Control className='mb-2' type='text' name='nome' placeholder='Insira seu Nome'></Form.Control>

                    <Form.Label className='mb-2'><b>CPF</b></Form.Label>
                    <Form.Control className='mb-2' type='text' name='cpf' placeholder='Informe seu CPF'></Form.Control>

                    <Form.Label className='mb-2'><b>Endereço</b></Form.Label>
                    <Form.Control className='mb-2' type='text' name='endereco'></Form.Control>

                    <Form.Label className='mb-2'><b>Telefone</b></Form.Label>
                    <Form.Control className='mb-2' type='text' name='telefone'></Form.Control>

                    <Form.Label className='mb-2'><b>Cupom</b></Form.Label>
                    <Form.Control className='mb-2' type='text' name='id_viagem'></Form.Control>
                </Form.Group>

                <hr />

                <button className='btn btn-success mb-5 mt-5 btnSalvar'>Salvar</button>
                <button className='btn btn-danger mb-5 mt-5 btnSalvar'>Cancelar</button>
                <button className='btn btn-warning mb-5 mt-5 btnSalvar'>Voltar</button>

            </div>
        );
    }

}

export default CreateUsuarioComponent