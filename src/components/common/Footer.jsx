import React from 'react';
import { Nav } from 'react-bootstrap';
import { BsInstagram, BsFacebook } from "react-icons/bs";
import {AiOutlineTwitter} from "react-icons/ai"
import {MdContactPhone} from "react-icons/md"
import {FaHistory} from "react-icons/fa"



const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 footer d-flex justify-content-center">
            <Nav.Link href="#" className="fs-2 m-3">Sobre nosotros
            <p className="fs-5 m-2">Nuestra Cultura</p>
            <p className="fs-5 m-2">Nuestra mision</p>
            <p className="fs-5 m-2"> <FaHistory></FaHistory>Historias y Novedades</p>
            </Nav.Link>
            <Nav.Link href="#" className="fs-2 m-3">Atencion al Cliente
            <p className="fs-5 m-2"> <MdContactPhone></MdContactPhone> Contacto</p></Nav.Link>
            <Nav.Link href="#" className="fs-2 m-3">Disfrutar Codeando?
            <p className="fs-5 m-2">Tenemos la mejor experiencia para Ti</p></Nav.Link>
        <p className="flex-end m-2">&copy; Todos los derechos reservados</p>
        <BsInstagram className="m-2"/>
        <BsFacebook className="m-2"></BsFacebook>
        <AiOutlineTwitter className="m-2"   ></AiOutlineTwitter>
       </footer>
    );
};

export default Footer;