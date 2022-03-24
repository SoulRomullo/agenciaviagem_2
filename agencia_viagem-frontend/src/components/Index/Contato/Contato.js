import React from 'react';
import './style.css'

const Contato = () => {
    return(
        <div class="container body_contato">
           <h1>Agência de viagem</h1>
           <h3>Entre em Contato</h3>

           <p>Av Paulista<br/>
           Cep. 98765-370<br/>
           <u>Telefone:</u> (11)98765-4321</p>

           <b>Suporte: </b><a href='#' type='email'>agencia_viagem@example.com</a><br/>
           <b>Marketing: </b><a href='#'>marketing_viagem@example.com</a>
        </div>
    );
}

export default Contato;