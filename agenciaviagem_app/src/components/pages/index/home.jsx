import React, { Component } from 'react'
import './style.css'
import imgAviao from '../../imagens/imgAviao.jpg'
import { Link } from 'react-router-dom'

class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
        
    }

    render() {
        return (
            <div className='container'>
                <article>
                    <img src={imgAviao} alt="imgAviao"className='img-fluid' />
                
                <div className='container caixa_info'>
                    
                    <span className='col-md-4 info_text'>
                        <h2>Cadastro</h2>
                        <p>
                            Faça o seu cadastro aqui na Agência Viagem de<br/>
                            Viagem, aqui você pode realizar seu sonho,<br/>
                            todos seus dados estão seguros em nosso<br/>
                            banco de dados, click no botão abaixo e faça seu cadastro.
                        </p>
                    </span>

                    <span className='col-md-4 info_text'>
                        <h2>Promoções</h2>
                        <p>
                            Conheça nossos melhores preços<br/>
                            para a sua viagem, aqui você pode ter<br/>
                            a certeza que o seu investimento<br/>
                            terá o melhor retorno, click no botão abaixo e 
                            faça sua própria pesquisa.
                        </p>
                    </span>

                    <span className='col-md-4 info_text'>
                        <h2>Contato</h2>
                        <p>
                            Entre em contato com a gente<br/>
                            nossos atendimentos estarão prontos<br/>
                            para dar a melhor assistência em suas<br/>
                            dúvidas, confira nossos contatos clicando
                            no botão abaixo.
                        </p>
                    </span>
                </div>

                <div className='container caixa_btn'>
                        
                        <p className='container botao'><Link className="btn btn-light " to="/add-usuario">Cadastrar &raquo;</Link></p>
                        <p className='container botao'><Link className="btn btn-light " to="/promocoes">Promoções &raquo;</Link></p>
                        <p className='container botao'><Link className="btn btn-light " to="/contato">Contato &raquo;</Link></p>
                    </div>

                </article>

            </div>
        );
    }
}

export default HomeComponent;