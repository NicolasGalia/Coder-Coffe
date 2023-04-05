import React from 'react';
import magdalenas from "./Img-AN/magdalenas.png"
import "./acercaNosotros.css"

const Bienvenidos = () => {
    return (
        <article>
        <div className="i">
          <div className="i-left">
            <div className="i-left-wrapper">
              <h2 className="i-intro">Hola, somos</h2>
              <h1 className="i-name">Coder Coffee</h1>
              <div className="i-title display-1">
                <div className="i-title-wrapper">
                  <div className="i-title-item">Cafe de especialidad</div>
                  <div className="i-title-item">Cenas</div>
                  <div className="i-title-item">Almuerzos</div>
                  <div className="i-title-item">Postres</div>
                </div>
              </div>
              <p className="i-desc">
              Te invitamos a nuestra casa, acompañado de una rica comida, buena musica y el mejor cafe
              </p>
            </div>
          </div>
          <div className="i-right">
            <div className="i-bg"></div>
            <img src={magdalenas} alt="" className="i-img" />
          </div>
        </div>
      </article>
    );
};

export default Bienvenidos;
