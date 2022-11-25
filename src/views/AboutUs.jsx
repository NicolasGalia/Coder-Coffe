import React from 'react';
import "./Acerca-de-nosotros/acercaNosotros.css";
import Bienvenidos from './Acerca-de-nosotros/Bienvenidos';
import InfoLocal from './Acerca-de-nosotros/InfoLocal';
import Participantes from './Acerca-de-nosotros/Participantes';
import "./Acerca-de-nosotros/acercaNosotros.css"


const AboutUs = () => {
  return (
    <div className="aboutUs">
      <Bienvenidos></Bienvenidos>
      <InfoLocal></InfoLocal>
      <Participantes></Participantes>
     </div>
    )
};
export default AboutUs;



