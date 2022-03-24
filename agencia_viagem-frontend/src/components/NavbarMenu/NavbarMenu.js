import React, { Component } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import './style.css';

import { Link } from 'react-router-dom'

export default class NavbarMenu extends Component {
    render() {
        return (
            <nav class="container">
                <Navbar className="menu" bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand className="link"><Link to="/" className="link1">Agência de Viagem</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" >
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link><Link to="/" className="menuLink">Início</Link></Nav.Link>                          <Nav.Link><Link to="/cadastrar" className="menuLink">Cadastrar</Link></Nav.Link>
                                <Nav.Link><Link to="/promocoes" className="menuLink">Promoções</Link></Nav.Link>
                                <Nav.Link>
                                <Link to="/contato" className="menuLink">Contato</Link>    
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </nav>
        );
    }
}

