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
import Logo from "../../../src/img/logoBgTransparent.png";
import {Routes} from "react-router-dom";
import { useNavigate, NavLink } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="text-light py-4 footer text-center">
      <Row >
        <Col xs={12} lg={3} md={12}>
          <NavLink to="/AcercaNosotros" href="#">
            <img src={Logo} alt="Logo" className="logoFooter " />
          </NavLink>
        </Col>
        

        <Col xs={12} lg={3} md={6}>
        <p className="m-3 fs-4">
            Sobre Nosotros
          </p>
          <p className="m-4">
            Menús
          </p>
          <p className="m-4">
          Nuestro Cafe <GiCoffeeCup></GiCoffeeCup>
          </p>
          <p className="m-4">
            Experiencia CoderCoffe
          </p>
        </Col>
          
        
        <Col xs={12} lg={3} md={6}>
          <p  className="m-3 fs-4">
            Atencion al Cliente{" "}
          </p>
          <p className="m-4">
            + 11 4347 9443 <BsFillTelephoneInboundFill className="m-1" />
          </p>
          <p className="m-4">
            Medios de pago <BsCreditCard2FrontFill></BsCreditCard2FrontFill>
          </p>
    </Col>

        <Col xs={12} lg={3} md={12}>
        
          <div className="d-flex justify-content-center">
            <p href="#">
              <BsInstagram className="m-3 bg" />
            </p>
            <p>
              {" "}
              <BsFacebook className="m-3"></BsFacebook>
            </p>
            <p>
              {" "}
              <AiOutlineTwitter className="m-3"></AiOutlineTwitter>
            </p>
          </div>
        </Col>
        
      </Row>

      <hr />
      <div>
        <p className=" m-5 d-flex justify-content-center">
          &copy; Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
