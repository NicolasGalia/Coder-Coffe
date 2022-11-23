import React from 'react';
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
            It is a long established fact that a reader will be distracted by the
            readable content.
          </p>
          <p className="a-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
          </p>
          <div className="a-award">
            <img src="https://images.pexels.com/photos/6321237/pexels-photo-6321237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">International Design Awards 2021</h4>
              <p className="a-award-desc">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                and fugit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};
export default AboutUs;



