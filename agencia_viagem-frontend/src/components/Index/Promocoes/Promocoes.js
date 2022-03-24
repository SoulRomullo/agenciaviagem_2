import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import imgBrasilia from '../../Imagens/imgBrasilia.jpg'
import imgSaoPaulo from '../../Imagens/imgSaoPaulo.jpg'
import imgRioDeJaneiro from '../../Imagens/imgRioDeJaneiro.jpg'
import imgFortaleza from '../../Imagens/imgFortaleza.jpg'
import imgMaceio from '../../Imagens/imgMaceio.jpg'
import imgPernambuco from '../../Imagens/imgPernambuco.jpg'

const Promocoes = () => {
    return (
        <article className='container page_body'>

            <h1>Promoções</h1>

            <Link className='btn btn-light' to="/cupom">Cadastrar Cupom &raquo;</Link>



            <p className='container box_Img'>

            <img src={imgRioDeJaneiro} alt="Imagem" className="img-fluid imgCidades" />
            <h2>Rio de Janeiro</h2>
            <p><b>Copie seu código e garanta a sua promoção.</b></p>
            <p>Para garantir sua promoção copie o código e<br/>
            coloque no seu cadastro para você ver a promoção.
            </p>
            <h3><b>abc001</b></h3>

            <img src={imgBrasilia} alt="Imagem" className="img-fluid imgCidades" />
            <h2>Brasilia</h2>
            <p><b>Copie seu código e garanta a sua promoção.</b></p>
            <p>Para garantir sua promoção copie o código e<br/>
            coloque no seu cadastro para você ver a promoção.
            </p>
            <h3><b>abc002</b></h3>

            <img src={imgFortaleza} alt="Imagem" className="img-fluid imgCidades" />
            <h2>Fortaleza</h2>
            <p><b>Copie seu código e garanta a sua promoção.</b></p>
            <p>Para garantir sua promoção copie o código e<br/>
            coloque no seu cadastro para você ver a promoção.
            </p>
            <h3><b>abc003</b></h3>

            <img src={imgMaceio} alt="Imagem" className="img-fluid imgCidades" />
            <h2>Macéio</h2>
            <p><b>Copie seu código e garanta a sua promoção.</b></p>
            <p>Para garantir sua promoção copie o código e<br/>
            coloque no seu cadastro para você ver a promoção.
            </p>
            <h3><b>abc004</b></h3>

            <img src={imgPernambuco} alt="Imagem" className="img-fluid imgCidades" />
            <h2>Pernambuco</h2>
            <p><b>Copie seu código e garanta a sua promoção.</b></p>
            <p>Para garantir sua promoção copie o código e<br/>
            coloque no seu cadastro para você ver a promoção.
            </p>
            <h3><b>abc005</b></h3>

            <img src={imgSaoPaulo} alt="Imagem" className="img-fluid imgCidades" />
            <h2>São Paulo</h2>
            <p><b>Copie seu código e garanta a sua promoção.</b></p>
            <p>Para garantir sua promoção copie o código e<br/>
            coloque no seu cadastro para você ver a promoção.
            </p>
            <h3><b>abc006</b></h3>

            </p>


        </article>
    );
}

export default Promocoes;