import React from 'react';
import { MdOutlineLocalCafe } from 'react-icons/md';
import magdalenas from "../img/magdalenas.png"
import "../aboutUs.css";


const AboutUs = () => {
  return (
    <section>
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
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img
              src="https://images.pexels.com/photos/3205736/pexels-photo-3205736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">Coder Coffee</h1>
          <p className="a-sub">
            Nacio como un proyecto entre compañeros, que destinaban la mayor parte de su tiempo a estar en una computadora.
          </p>
          <p className="a-desc">
            Por eso mismo la importancia de un buen cafe a nuestro lado fue la motivacion para crear este lugar, 
            con el objetivo de ofrecerles a todos nuestros invitados la posibilidad de relajarse, disfrutar con amigos o
             simplemente pasar esas horas de trabajo acompañado de los mejores platos y un buen ambiente.
          </p>
          <div className="a-award">
            <img src="https://images.pexels.com/photos/6321237/pexels-photo-6321237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title"><MdOutlineLocalCafe />  Sucursal</h4>
              <p className="a-award-desc">
              Av. 24 de septiembre 757 <br /> San Miguel de Tucumán, Tucumán.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};
export default AboutUs;



