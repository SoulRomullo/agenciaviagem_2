import React from 'react'
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import imgAviao from './components/Imagens/imgAviao.jpg'


function App() {
  return (
    <article>
      <p class="container">
        <img src={imgAviao} class="img-fluid"/>
      </p>
      <span class="container caixa_info">
        <span class="col-md-4 info_text">
          <h2>Cadastro</h2>
          <p>
            Faça o seu cadastro aqui na Agência de<br />
            Viagem, aqui você pode realizar seu sonho,<br />
            todos seus dados estão seguros em nosso<br />
            banco de dados, click no botão abaixo e faça
            seu cadastro.
          </p>

        </span>
        <span class="col-md-4 info_text">
          <h2>Promoções</h2>
          <p>
            Conheça nossos melhores preços<br />
            para a sua viagem, aqui você pode ter<br />
            a certeza que o seu investimento<br />
            terá o melhor retorno, click no botão
            abaixo e faça sua própria pesquisa.
          </p>
          
        </span>
        <span class="col-md-4 info_text">
          <h2>Contato</h2>
          <p>
            Entre em contato com a gente<br />
            nossos atendentes estarão prontos<br />
            para dar a melhor assistência em suas <br />
            dúvidas, confira nossos contatos clicando        no botão abaixo.
          </p>

        </span>
        
      </span>
      <span class="container caixa_btn">

          <p class="container botao"><Link to="/cadastrar" class="btn btn-light">Cadastrar &raquo;</Link></p>

          <p class="container botao"><Link to="/promocoes" class="btn btn-light">Promoções &raquo;</Link></p>

          <p class="container botao"><Link to="/contato" class="btn btn-light">Contato &raquo;</Link></p>

        </span>


    </article>
  );
}

export default App;
