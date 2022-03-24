import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './components/NavbarMenu/NavbarMenu'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cadastrar from './components/Index/Cadastrar/Cadastrar'
import Promocoes from './components/Index/Promocoes/Promocoes'
import Contato from './components/Index/Contato/Contato'
import Cupom from './components/Index/Cupom/Cupom'


ReactDOM.render(
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element = { <App/> } path="/" excet/>
        <Route element = { <Cadastrar/> } path="/cadastrar"/>
        <Route element = { <Promocoes/> } path="/promocoes" excet/>
        <Route element = { <Contato/> } path="/contato"/>
        <Route element = { <Cupom/> } path="/cupom"/>
      </Routes>
      <Footer/>
    </BrowserRouter>,
    

    
  
  
  document.getElementById('root')
);


