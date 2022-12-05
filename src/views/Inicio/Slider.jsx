import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./inicio.css"
import hambuesaSlider from "../../img/hamburguesaSlider.png"
import pizzaSlider from "../../img/pizzaSlider.png"
import meriendaSlider from "../../img/meriendaSlider.png"

const Slider = () => {

    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={meriendaSlider}
              alt="merienda promo"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={hambuesaSlider}
              alt="hamburguesa slider"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pizzaSlider}
              alt="pizza promo"
            />
          </Carousel.Item>
        </Carousel>
      );
            }
export default Slider;



