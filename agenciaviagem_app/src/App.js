import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavbarMenu from './components/navbar/NavBarMenu'
import Footer from '../src/components/footer/Footer'
import HomeComponent from './components/pages/index/home';
import ContatoComponent from './components/pages/contato/contato'
import PromocoesComponent from './components/pages/promocoes/promocoes'
import CreateUsuarioComponent from './components/pages/cadastrar/cadastrar'

function App() {
  return (
    <div>
      <Router>
        <NavbarMenu/>
          <Switch>
            <Route path='/' exact component={HomeComponent}></Route>
            <Route path="/home" component={HomeComponent}></Route>
            <Route path="/add-usuario" component={CreateUsuarioComponent}></Route>
            <Route path="/contato" component={ContatoComponent}></Route>
            <Route path="/promocoes" component={PromocoesComponent}></Route>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
