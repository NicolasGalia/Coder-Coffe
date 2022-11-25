import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../../src/img/logoBgTransparent.png';
import {link, NavLink} from "react-router-dom";

const Menu = () => {
    return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 navbarPaginas">
          <Container fluid>
            <Navbar.Brand href="#"> 
            <img src={Logo} alt="Logo" className="logoNav"/>
            </Navbar.Brand>
            <Nav.Link href="#action1" className="itemsNavb linknoMostrar">Menú</Nav.Link>
            <Nav.Link href="#action2" className="itemsNavb linknoMostrar">Nuestro Café</Nav.Link>
            <Nav.Link href="#action3" className="itemsNavb linknoMostrar">Expieriencia CoderCoffe</Nav.Link>
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="navbarExpand">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Coder Coffe
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Iniciar Sesion</Nav.Link>
                  <NavLink end to="/registro" className="nav-item nav-link">Registro</NavLink>
                  <Nav.Link href="#action2">Productos destacados</Nav.Link>
                  <NavDropdown
                    title="Menús del dia"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Desayunos/Meriendas</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Almuerzos/cena
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      cerrar
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Buscar Productos"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Buscar</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Menu;


