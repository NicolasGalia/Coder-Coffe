import React from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "./acercaNosotros.css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import flor from "./Img-AN/flor.jpg"
import logo from "./Img-AN/logo.jpeg";
import luciana from "./Img-AN/luciana.jpeg"
import julieta from "./Img-AN/julieta.jpeg"
import edu from "./Img-AN/edu.jpeg"
import nico from "./Img-AN/nico.jpeg"
import eloy from "./Img-AN/eloy.jpeg"


const participantes = () => {
  const miembros = [
    {
      img: flor,
      nombreMiembro:
        "Florencia Palma",
      review:
      "24 años - Estudiante de RollingCode School"  
    },
    {
      img: nico,
      nombreMiembro:
        "Nicolas Galia",
        review:
        "24 años - Estudiante de RollingCode School"  
    },
    {
      img: luciana,
      nombreMiembro:
        "Luciana Soria",
        review:
        "24 años - Estudiante de RollingCode School"  
    },
  {
    img: edu,
    nombreMiembro:
      "Eduardo Ross",
      review:
      "24 años - Estudiante de RollingCode School"  
  },
  {
    img: eloy,
    nombreMiembro:
      "Eloy Pintos",
      review:
      "24 años - Estudiante de RollingCode School"  
  },
  {
    img: julieta,
    nombreMiembro:
      "Julieta Valdez",
      review:
      "24 años - Estudiante de RollingCode School"  
  }];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Miembros del </span>
        <span className='equipo'>equipo</span>
      <div className="blur t-blur1" ></div>
      <div className="blur t-blur2"></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {miembros.map((miembros, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={miembros.img} alt="miembro del equipo" />
                <span className='nombreMiembro'>{miembros.nombreMiembro}</span>
                <span>{miembros.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default participantes;








