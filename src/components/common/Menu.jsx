import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../../../src/img/logoBgTransparent.png";
import { useNavigate, NavLink } from "react-router-dom";
import Modal from "./Modal";

const Menu = () => {
  const [showModal, setShowModal] = useState(false);
  const carrito = JSON.parse(localStorage.getItem("shopping-cart"));
  const token = localStorage.getItem("tokenCoderCofee");
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const handleCloseSesion = () => {
    localStorage.removeItem("tokenCoderCofee");
    localStorage.removeItem("user");
    localStorage.setItem("shopping-cart", JSON.stringify([]));
    navigate("/login");
  };
  return (
    <>
      <Modal
        show={showModal}
        handleClose={() => setShowModal(false)}
        title="Carrito"
        data={carrito}
      />
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbarPaginas">
          <Container fluid>
            <Navbar.Brand to="/">
              <img src={Logo} alt="Logo" className="logoNav" />
            </Navbar.Brand>
            {token && (
              <NavLink
                onClick={() => setShowModal(true)}
                to="/"
                className="itemsNavb linknoMostrar navbar navbar-brand"
              >
                Carrito<i class="bi bi-cart3"></i>
              </NavLink>
            )}
            <NavLink
              to="/"
              className="itemsNavb linknoMostrar navbar navbar-brand"
            >
              Menú
            </NavLink>
            <NavLink
              to="/AcercaNosotros"
              className="itemsNavb linknoMostrar navbar navbar-brand "
            >
              Sobre nosotros
            </NavLink>
            <a
              href="https://drive.google.com/file/d/1ajTaX1qJBuMPvVPx5VHnTGcElgwL7Lzh/view?usp=sharing"
              className="itemsNavb linknoMostrar navbar navbar-brand"
            >
              Menú Hamburguesas
            </a>

            {token && (
              <span
                className="itemsNavb linknoMostrar text-light"
              >
                {user.nombre}<i className="bi bi-person-fill text-light" ></i>
              </span>
            )}

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
                  <NavLink to="/login" className="nav-item nav-link">
                    Iniciar Sesion
                  </NavLink>
                  <NavLink end to="/registro" className="nav-item nav-link">
                    Registro
                  </NavLink>
                  <NavLink to="/error404" className="nav-item nav-link">
                    Productos destacados
                  </NavLink>
                </Nav>
                {token && (
                  <div className="d-grid gap-2">
                    <Button variant="secondary" onClick={handleCloseSesion}>
                      Cerrar sesión
                    </Button>
                  </div>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Menu;
