import React from 'react';
import { Nav, Row} from 'react-bootstrap';
import { BsInstagram, BsFacebook, BsFillTelephoneInboundFill, BsCreditCard2FrontFill } from "react-icons/bs";
import {AiOutlineTwitter} from "react-icons/ai"
import {GiCoffeeCup} from "react-icons/gi"
import {IoLocationOutline} from "react-icons/io5"



const Footer = () => {
    return (
    <footer className="bg-dark text-light py-4 footer">
<Row className="row d-flex">
    <div className="col-3">
    <Nav.Link href="#" className="m-3">
 LOGO
    </Nav.Link>
    </div> 
    <div className="col-3">
    <Nav.Link href="#" className="m-3 fs-4">Sobre Nosotros</Nav.Link>
    <Nav.Link href="#"className="m-4">Nuestro Cafe <GiCoffeeCup></GiCoffeeCup></Nav.Link>
    <Nav.Link href="#"className="m-4">Nuestras Promociones</Nav.Link>
    <Nav.Link href="#"className="m-4">Nuestra Ubicacion <IoLocationOutline></IoLocationOutline></Nav.Link>
    </div> 
    <div className="col-3"> 
    <Nav.Link href="#" className="m-3 fs-4">Atencion al Cliente </Nav.Link>
    <p className="m-4">+ 11 4347 9443 <BsFillTelephoneInboundFill className ="m-1"/></p>
    <p className="m-4">Medios de pago <BsCreditCard2FrontFill></BsCreditCard2FrontFill></p>
    </div> 
    <div className = "col-2 text-center d-flex">
        <Nav.Link href="#"><BsInstagram className="m-2 bg"/></Nav.Link>
        <Nav.Link href="#"> <BsFacebook className="m-2"></BsFacebook></Nav.Link>
        <Nav.Link href="#"> <AiOutlineTwitter className="m-2"></AiOutlineTwitter></Nav.Link>
        </div>
    <hr />
    <div>
       <p className="m-5 d-flex justify-content-center">&copy; Todos los derechos reservados</p>
       </div>
</Row>      
        </footer>

    );
};

export default Footer;