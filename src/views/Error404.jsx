import React from 'react';
import error from "./Acerca-de-nosotros/Img-AN/error.png"
import "../App.css"
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <article className='errorFondo'>
        <div className="container error">
            <img src={error} alt="error 404" className='w-100' />
            <div className='textoError'>
            <span>Lo sentimos, la pagina no se encuentra disponible</span>
            <Link en to="/AcercaNosotros" type="button" className='btn btn-lg mb-5 botonError'> Inicio </Link>
            </div> 
        </div>
        </article>
    );
};

export default Error404;

