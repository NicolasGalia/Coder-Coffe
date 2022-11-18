import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import {
  BsInstagram,
  BsFacebook,
  BsFillTelephoneInboundFill,
  BsCreditCard2FrontFill,
} from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { GiCoffeeCup } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import Logo from "../../../src/img/logoBgTransparent.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 footer text-center">
      <Row >
        <Col xs={12} lg={3} md={6}>
          <Nav.Link href="#">
            <img src={Logo} alt="Logo" className="logoFooter " />
          </Nav.Link>
        </Col>
        

        <Col xs={12} lg={3} md={6}>
        <Nav.Link href="#" className="m-3 fs-4">
            Sobre Nosotros
          </Nav.Link>
          <Nav.Link href="#" className="m-4">
            Nuestro Cafe <GiCoffeeCup></GiCoffeeCup>
          </Nav.Link>
          <Nav.Link href="#" className="m-4">
            Nuestras Promociones
          </Nav.Link>
          <Nav.Link href="#" className="m-4">
            Nuestra Ubicacion <IoLocationOutline></IoLocationOutline>
          </Nav.Link>
        </Col>
          
        
        <Col xs={12} lg={3} md={6}>
          <Nav.Link href="#" className="m-3 fs-4">
            Atencion al Cliente{" "}
          </Nav.Link>
          <p className="m-4">
            + 11 4347 9443 <BsFillTelephoneInboundFill className="m-1" />
          </p>
          <p className="m-4">
            Medios de pago <BsCreditCard2FrontFill></BsCreditCard2FrontFill>
          </p>
    </Col>

        <Col xs={12} lg={3} md={6}>
        
          <div className="d-flex justify-content-center">
            <Nav.Link href="#">
              <BsInstagram className="m-3 bg" />
            </Nav.Link>
            <Nav.Link href="#">
              {" "}
              <BsFacebook className="m-3"></BsFacebook>
            </Nav.Link>
            <Nav.Link href="#">
              {" "}
              <AiOutlineTwitter className="m-3"></AiOutlineTwitter>
            </Nav.Link>
          </div>
        </Col>
        
      </Row>

      <hr />
      <div>
        <p className="m-5 d-flex justify-content-center">
          &copy; Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
